// Write your solution in this file!
const driver = {
 
}

function updateDriverWithKeyAndValue(driver, key, value) {

  let cloneDriver = {...driver}
  
  cloneDriver[key] = value

return cloneDriver

}

function destructivelyUpdateDriverWithKeyAndValue (driver, key, value) {
  
  driver[key] = value
  
  return driver
  
}

function deleteFromDriverByKey(driver, key) {
  
  
  const cloneDriverTwo = Object.assign({}, driver)
  
  delete cloneDriverTwo.name
  
  return cloneDriverTwo
}