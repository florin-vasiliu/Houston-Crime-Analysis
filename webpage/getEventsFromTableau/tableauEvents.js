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

{/* <div class='tableauPlaceholder' id='viz1595345717496' style='position: relative'>
    <noscript>
        <a href='#'>
            <img alt=' ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Tr&#47;Tractsv3&#47;Map_Offenses&#47;1_rss.png' style='border: none' />
        </a>
    </noscript>
        <object class='tableauViz'  style='display:none;'>
            <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> 
            <param name='embed_code_version' value='3' /> 
            <param name='site_root' value='' />
            <param name='name' value='Tractsv3&#47;Map_Offenses' />
            <param name='tabs' value='no' />
            <param name='toolbar' value='yes' />
            <param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Tr&#47;Tractsv3&#47;Map_Offenses&#47;1.png' /> 
            <param name='animate_transition' value='yes' />
            <param name='display_static_image' value='yes' />
            <param name='display_spinner' value='yes' />
            <param name='display_overlay' value='yes' />
            <param name='display_count' value='yes' />
            <param name='language' value='en' />
        </object>
        </div>
            <script type='text/javascript'> 
                var divElement = document.getElementById('viz1595345717496');                    
                var vizElement = divElement.getElementsByTagName('object')[0];                    
                vizElement.style.width='100%';vizElement.style.height=(divElement.offsetWidth*0.75)+'px';                    
                var scriptElement = document.createElement('script');                    
                scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    
                vizElement.parentNode.insertBefore(scriptElement, vizElement);                
            </script> */}