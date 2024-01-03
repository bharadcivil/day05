//1
//for

const person={
    "name":"jhon",
    "age":"30",
    "city":"chennai",
    "language":["tamil","english","hindi"]
};

//for of 
for (const language of jsonData.languages) {
    console.log("Language: ${language}");
  }

//for in
for (const key in jsonData) {
    console.log("${key}: ${jsonData[key]}");
  }
  
//for each
jsonData.language.forEach((language) => {
    console.log("Language: ${language}");
  });

//2 
resume_data ={
    "name": "Bharadwaj",
    "contact":{
        "email":"bharadcivil@gmail.com",
    },
    "objective":"To grab an opportunity and set myself a goal where I can be innovative and attain a challenging portion by exercising my inter personal and professional skills to the fullest the growth and profitability of the organizatio",
    "education":[
        {
            "diploma":{"major": "diploma in civil", "percentage": "82%","college":"CPTC","project":"Effet of high temperature on concrete with MANUFACTURED SAND MSAND"},
            "HSC":{"major":"computerscience","percentage":"49.8%","institution":"Bhaarath group of school"},
            "sslc":{"major":"mathematics","perrcentage":"48%","institution":"The Leaders Academy CBSE"},
            "IT":[{"major":"FullstackDeveloper","institution":"GUVI"},
        {"major":"cybersecurity" ,"institution":"Kaashiv info tech"},
    {"major":"Networking","institution":"Kaashiv info tech"},
{"major":"Linux","institution":"kaashiv info tech"},
,{"major":"cloud","institution":"kaashiv info tech"},
{"major":".net","institution":"kaashiv info tech"},
{"major":"Devops","institution":"kaashiv info tech"}
]   }],
"certifications":["Chat GPT for everyone","javascript"],
"achivement":"Limca record",
"personal detail":{
    "name":"Bharadwaj",
    "DOB":"18-09-1999",
    "fathers name":"Muthukumar",
    "Nationality":"Indian",
    "Marital status":"Single",
    "language known":"english,tamil",

},
"declaration":"I here by declare that the above information is true to the best of my knowledge."
}