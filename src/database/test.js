const Database = require('./db')
const creatProffy = require('./createProffy')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    //Insert data

    proffyValue = { 
        name: "Alícia Foureaux",
        avatar: "https://avatars3.githubusercontent.com/u/66289769?s=460&u=d54629dc644cbfa4407e4e4b09ddb1684c6423eb&v=4",
        whatsapp: "40028922",
        bio: "Eu dou umas aulas aí."
    }

    classValue = {
        subject: "1",
        cost: "20",
        //O proffy id vem do banco de dados
    }

    classScheduleValues = [
        //Class_id virá pelo banco de dados
        {
            weekday: 3,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    // await createProffy(db, {proffyValue, classValue, classScheduleValues})

    //Query data
    //All proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")

    //Consult classes
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)

    // console.log(selectClassesAndProffys)

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "1220"
    `)

    console.log(selectClassesSchedules)
})