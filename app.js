const workingDaysInput=document.querySelector("#total-working-days")
const selectElement = document.getElementById('attendance-range');
const classesHeldInput=document.querySelector("#classes-held");
const classesPresentInput=document.querySelector("#classes-present")


const workingDays=workingDaysInput.value;
const classesHeld=classesHeldInput.value;
const classesPresent=classesPresentInput.value;
const attendanceRange = selectElement.value;    

const presentAttendance=(classesPresent/classesHeld)*100;
const classesLeft=(workingDays*6)-classesHeld;
const classesRequired=(attendanceRange*(workingDays*6))/100
const classesToSkip=(classesHeld-classesRequired);


document.querySelector(".presentAtt").textContent=presentAttendance;
document.querySelector(".classLeft").textContent=classesLeft;
document.querySelector(".classReq").textContent=classesRequired;
document.querySelector(".classSkip").textContent=classesToSkip;

