var viz;
var census_tract;

function initViz() {
    var containerDiv = document.getElementById("vizContainer"),
        url = "https://public.tableau.com/views/HoustonCrimeData/Map_AverageIncome?:language=en&:display_count=y&:origin=viz_share_link",
        options = {
            "Academic Year": "",
            hideTabs: true,
            onFirstInteractive: function () {
                listenToMarksSelection();
            }
        };

    viz = new tableau.Viz(containerDiv, url, options);
    // var vizElement = divElement.getElementsByTagName('object')[0];
}

function listenToMarksSelection() {
    viz.addEventListener(tableau.TableauEventName.MARKS_SELECTION, onMarksSelection);
}

function onMarksSelection(marksEvent) {
    return marksEvent.getMarksAsync().then(reportSelectedMarks);
}

function reportSelectedMarks(marks) {
    var html = "";

    for (var markIndex = 0; markIndex < marks.length; markIndex++) {
        var pairs = marks[markIndex].getPairs();
        html += "<b>Mark " + markIndex + ":</b><ul>";

        for (var pairIndex = 0; pairIndex < pairs.length; pairIndex++) {
            var pair = pairs[pairIndex];
            if(pair.fieldName == "Tractce"){
                census_tract = pair.formattedValue
                console.log("census_tract",census_tract);
                html += "<br/><b>Value:</b> " + census_tract + "</li>";
            }
            // html += "<li><b>Field Name:</b> " + pair.fieldName;
            // html += "<br/><b>Value:</b> " + pair.formattedValue + "</li>";
        }

        html += "</ul>";
    }

    var infoDiv = document.getElementById('markDetails');
    infoDiv.innerHTML = html;
}

