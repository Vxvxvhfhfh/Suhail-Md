const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "https://youtu.be/WPl10ZrhCtk?si=GsDPjQ05AvqNbLfl" ;  
global.video= "https://youtu.be/WPl10ZrhCtk?si=GsDPjQ05AvqNbLfl" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Yun:<suhail>@cluster0.0ysskom.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://www.imghippo.com/i/6f0641722365163.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "63685468";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "log" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://www.imghippo.com/i/6f0641722365163.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "Gheno Matrix,63685468";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_35_07_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxODksXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTksXG4gICAgICAgIDE4MixcbiAgICAgICAgNjUsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjU1LFxuICAgICAgICA3LFxuICAgICAgICAyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTcyLFxuICAgICAgICA0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDY3LFxuICAgICAgICAyMixcbiAgICAgICAgNzEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEsXG4gICAgICAgIDcwLFxuICAgICAgICA3NSxcbiAgICAgICAgMjA0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDQzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMixcbiAgICAgICAgMzEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA5OCxcbiAgICAgICAgNCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTksXG4gICAgICAgIDk2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDM5LFxuICAgICAgICAyOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTUyLFxuICAgICAgICA1MSxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDY0LFxuICAgICAgICAxNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTk4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTgzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDQzLFxuICAgICAgICA3OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTk1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDUxLFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDQxLFxuICAgICAgICA1MyxcbiAgICAgICAgODcsXG4gICAgICAgIDgwLFxuICAgICAgICAyNixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4MixcbiAgICAgICAgODksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTI3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg2LFxuICAgICAgICAyNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMixcbiAgICAgICAgMTc0LFxuICAgICAgICA5OCxcbiAgICAgICAgMzksXG4gICAgICAgIDExNixcbiAgICAgICAgODgsXG4gICAgICAgIDg0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxODEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTksXG4gICAgICAgIDYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDc0LFxuICAgICAgICAyMzksXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTYzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTYyLFxuICAgICAgICA1NyxcbiAgICAgICAgNTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTksXG4gICAgICAgIDExNixcbiAgICAgICAgMTQsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjksXG4gICAgICAgIDExNixcbiAgICAgICAgMzMsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTkzLFxuICAgICAgICAxODcsXG4gICAgICAgIDM2LFxuICAgICAgICA1MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTU3LFxuICAgICAgICA3MixcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTI2LFxuICAgICAgICA4NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTMxLFxuICAgICAgICAzNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDc5LFxuICAgICAgICA5NixcbiAgICAgICAgNzcsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTExLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJtRFovamdxYWFRTm4vZHpKa0NUb2VjUkQ3MkdqdGZjRlRVclZ2aEFYcHRnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI0UkJrQnVzNFNVbUxXQWMyUGdCRllnXCIsXG4gIFwicGhvbmVJZFwiOiBcImQwZWIyMjA0LWFkMzgtNDI1Ni1hMmY2LWU0Mjc2YzQzOTYwMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5NyxcbiAgICAgIDE5NyxcbiAgICAgIDEwNCxcbiAgICAgIDE2MCxcbiAgICAgIDE1MyxcbiAgICAgIDE3MSxcbiAgICAgIDExNyxcbiAgICAgIDE3OCxcbiAgICAgIDIwNSxcbiAgICAgIDEyMSxcbiAgICAgIDIwNixcbiAgICAgIDIzMyxcbiAgICAgIDM3LFxuICAgICAgNjUsXG4gICAgICAyNDYsXG4gICAgICAzMyxcbiAgICAgIDc1LFxuICAgICAgMTU3LFxuICAgICAgNzcsXG4gICAgICA5MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMixcbiAgICAgIDEwNSxcbiAgICAgIDExMixcbiAgICAgIDIzNyxcbiAgICAgIDE4MCxcbiAgICAgIDEyNyxcbiAgICAgIDI0MyxcbiAgICAgIDE3OSxcbiAgICAgIDQzLFxuICAgICAgMTUzLFxuICAgICAgMjQ0LFxuICAgICAgNTEsXG4gICAgICAxNzUsXG4gICAgICAyNDEsXG4gICAgICAxNTUsXG4gICAgICAxMCxcbiAgICAgIDIyMCxcbiAgICAgIDU0LFxuICAgICAgMTU1LFxuICAgICAgMTYzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSU80eW9rSEVJRGxwTFVHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0VHBGRm1JRkxkUTdXMWJJTHc1bm1VR0hpQUpROWFwS3QxeDY0ak5QSTFnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIi82eXd4aWtRbExTa1RMeEFibDZZaG02WVFxVHVoTHlkbmlYODRuSk9vbklzNTNnaXhXeWdLSGFwb0pMTm5IdzVkcG5HTEJlMDhkWTJyVG1QbU84dUNBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImpnS2p6Tm9uQTNBR1gzcHV6WGRXaFU4ZGNiSDBKNjFIQlN5eDlKNnYxRUZ2K0pxWVlxYjd4dlQ1NTFQVXVleG51ZmIvOW43QnpuK0lnemNlZkJnMkNBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjI2NjM2ODU0Njg6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjQ4MTk4NTc2MDM4MTE2OjEzQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjI2NjM2ODU0Njg6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgODhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjM2NDU0OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJvelwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQm96Lmpzb24iOiAie1wia2V5RGF0YVwiOlwienIzNVdscmExeXNCK0ZUSlB3Z2FKUUVLR0NMNGR0cnZsVnduRDR0WWx3VT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODk5MTQyMTQ3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA5NTY3MjEwMjFcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "€",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Eoza",
  packname: process.env.PACK_NAME || "Gheno",
  botname : process.env.BOT_NAME  || "Gheno bot",
  ownername:process.env.OWNER_NAME|| "Gheno",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "Gheno"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
