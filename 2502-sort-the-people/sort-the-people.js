/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    for(var i=0;i<names.length;i++){
        for(var j=0;j<names.length;j++){
            if(heights[i]>heights[j]){
               var temp=heights[i];
                heights[i]=heights[j];
                heights[j]=temp;

               var temp2=names[i];
                names[i]=names[j];
                names[j]=temp2;

            }
        }
    }
    return names
};


