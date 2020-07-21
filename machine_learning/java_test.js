cbm = loadModel('crime_CatBoost.pkl');

console.log(bm.predict([15, 'Highway, Road, Street, Alley', '100000', 5, 'Friday', 80.22, 'Clouds']))