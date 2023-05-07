const employee = {
    name: "name",
    streetAddress: "address"
}



function updateEmployeeWithKeyAndValue(employee, key, value){
    return {
        ...employee,
        [key]: value,
      };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee
}
function deleteFromEmployeeByKey(obj,key){
    const newObj = {...obj}
    delete newObj[key]
    return newObj
  }

  function (destructivelyDeleteFromEmployeeByKey(obj, key)){
    delete obj[key]
    return obj
  }