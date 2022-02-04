oldGetSetTypes = getSetTypes;
oldNumberOfSetsOfType = numberOfSetsOfType
oldGetCellsInSet = getCellsInSet
oldFormatSet = formatSet;
oldGetCellsSeenByDisjointGroup = getCellsSeenByDisjointGroup;

getSetTypes = function(){
    oldGetSetTypes();
    setTypes.push('HSlice');
    setTypes.push('VSlice');
}

numberOfSetsOfType = function(type){
    if(['HSlice', 'VSlice'].includes(type))
        return size;
    return oldNumberOfSetsOfType(type);
}

getCellsInSet = function(type, num){
    if(setTypes[type] === 'HSlice')
        return getCellsInHSlice(num);
    if(setTypes[type] === 'VSlice')
        return getCellsInVSlice(num);
    return oldGetCellsInSet(type, num);
}

getCellsInHSlice = function(num){
    const cells = [];
    var x = num % 3;
    var y = (num - x) / 3;
    for(var i = y; i < size; i += 3){
        for(var j = x * 3; j < (x + 1) * 3; j++){
            cells.push(grid[i][j]);
        }
    }
    
    return cells;
}

getCellsInVSlice = function(num){
    const cells = [];
    var x = num % 3;
    var y = (num - x) / 3;
    for(var i = y * 3; i < (y + 1) * 3; i++){
        for(var j = x; j < size; j += 3){
            cells.push(grid[i][j]);
        }
    }
    
    return cells;
}

formatSet = function(type, index){
    if(setTypes[type] === 'HSlice')
        return 'horizontal slice ' + (((index / 3)|0) + 1) + ' of box column ' + ((index % 3) + 1);
    if(setTypes[type] === 'VSlice')
        return 'vertical slice ' +  ((index % 3) + 1) + ' of box row ' + (((index / 3)|0) + 1);
    return oldFormatSet(type, index);
}

// Pretend our slices are the disjoint group constraint.
getCellsSeenByDisjointGroup = function(cell, returnIfFound){
    var cells = oldGetCellsSeenByDisjointGroup(cell, returnIfFound);
    if (returnIfFound) {
        if (cells) return cells;
        cells = [];
    }

    const cellIBoxOffset = cell.i % regionH;
    const cellJBoxOffset = cell.j % regionW;
    const cellIBox = (cell.i / regionH)|0;
    const cellJBox = (cell.j / regionW)|0;

    for (var iBox = 0; iBox < size / regionH; ++iBox) {
        if (iBox == cellIBox) continue;
        for (var jOffset = 0; jOffset < regionW; ++jOffset) {
            if (jOffset == cellJBoxOffset) continue;
            const i = iBox * regionH + cellIBoxOffset;
            const j = cellJBox * regionW + jOffset;
            const c = grid[i][j];
            if (c.value === returnIfFound)
                return c;
            cells.push(c);
        }
    }
    for (var jBox = 0; jBox < size / regionW; ++jBox) {
        if (jBox == cellJBox) continue;
        for (var iOffset = 0; iOffset < regionH; ++iOffset) {
            if (iOffset == cellIBoxOffset) continue;
            const i = cellIBox * regionH + iOffset;
            const j = jBox * regionW + cellJBoxOffset;
            const c = grid[i][j];
            if (c.value === returnIfFound)
                return c;
            cells.push(c);
        }
    }

    return returnIfFound ? null : cells;
}
