# script.js dosyasını 5 parçaya böl
sed -n '1,170p' script.js > script_part1.js
sed -n '171,340p' script.js > script_part2.js
sed -n '341,510p' script.js > script_part3.js
sed -n '511,680p' script.js > script_part4.js
sed -n '681,844p' script.js > script_part5.js

# içerikleri ekrana bas (buradan kopyala)
cat script_part1.js
cat script_part2.js
cat script_part3.js
cat script_part4.js
cat script_part5.js
