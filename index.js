var recipes = {};


function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {prop2 : value})
  
  
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  
  return Object.assign(object, {prop2 : value})
}

function deleteFromObjectByKey(object, key){
  var nObj = Object.assign({},object, {key : value})
  delete nObj[key];
  return nObj;

  
}