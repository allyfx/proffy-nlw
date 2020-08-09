//Procurar o botão
//Quando clicar no botão
document.querySelector("#add-time").addEventListener("click", cloneField)

function cloneField() {
    var fieldContainer = document.querySelectorAll('div.schedule-item')
    var duplicateField = null
    var scheduleId = 0

    fieldContainer.forEach((field) => {
        field.querySelectorAll('input').forEach((field) => {
            if(field.value == ""){
                duplicateField = false
            } else {
                duplicateField = true
            }
        })
    })

    if(duplicateField) {
        document.getElementById('create-class').querySelectorAll('.schedule-item').forEach((schedule) => {
            scheduleId += 1
        })
        //Duplicar os campos
        const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)
        newFieldContainer.id = scheduleId + 1

        //Limpar os campos
        const fields = newFieldContainer.querySelectorAll('input')
        

        fields.forEach(function(field) {
            field.value = ""
        })

        //Colocar na página
        document.querySelector("#schedule-items").appendChild(newFieldContainer)
        for (var index of newFieldContainer.childNodes) {
            if(index.id == scheduleId - 1 || index.id == 1) {
                index.id = scheduleId + 1
            }
        }

        let deleteSchedules = document.querySelectorAll('.delete-schedule')

        for (var index of deleteSchedules) {
            index.addEventListener('click', function () {
                var schedule = document.getElementById('schedule-items')
                schedule.childNodes.forEach((child) => {
                    if(child.id == this.id & child.id != 1){
                        schedule.removeChild(child)
                    }
                })
            })
        }
    }
}