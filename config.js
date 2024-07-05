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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_49_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTcyLFxuICAgICAgICA4LFxuICAgICAgICAyMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTE3LFxuICAgICAgICA2NixcbiAgICAgICAgMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDksXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDUsXG4gICAgICAgIDIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDY4LFxuICAgICAgICA4OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjExLFxuICAgICAgICAzMyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxODksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwLFxuICAgICAgICA2NyxcbiAgICAgICAgNDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDc5LFxuICAgICAgICAxNzksXG4gICAgICAgIDgxLFxuICAgICAgICA4MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDc0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTksXG4gICAgICAgIDg1LFxuICAgICAgICA2NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwNixcbiAgICAgICAgNTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTY4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcxLFxuICAgICAgICAxNjksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0NixcbiAgICAgICAgNDgsXG4gICAgICAgIDYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjM1LFxuICAgICAgICA0NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDYyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjksXG4gICAgICAgIDI0MixcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjksXG4gICAgICAgIDIzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzksXG4gICAgICAgIDI3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMixcbiAgICAgICAgMjE3LFxuICAgICAgICAxODUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxODksXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDYzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTksXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTgzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDUyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDUsXG4gICAgICAgIDE4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDQ5LFxuICAgICAgICA5NyxcbiAgICAgICAgNTksXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA5NixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgODBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDYsXG4gICAgICAgIDQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTExLFxuICAgICAgICAyNTIsXG4gICAgICAgIDQ4LFxuICAgICAgICA3OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwNixcbiAgICAgICAgNDMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDgxLFxuICAgICAgICAxMDksXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDkzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjExLFxuICAgICAgICAyMTksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1LFxuICAgICAgICAyOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJCemd2UUNnY1RVQTRucVU4T3hZcEpkaGtCWFNXZW1TcERCWm9ScWpHYWZvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIyRkVNd2VMT1R4cS01QWRvY3lKNlZnXCIsXG4gIFwicGhvbmVJZFwiOiBcImIzZWZhYzQ4LTJmZjMtNGQ3Ni1hMTc1LTY3OGM5M2Q2N2YzNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjQsXG4gICAgICAyNCxcbiAgICAgIDE5OSxcbiAgICAgIDc3LFxuICAgICAgNDAsXG4gICAgICAxODcsXG4gICAgICAyNDEsXG4gICAgICAyNDcsXG4gICAgICAxOTgsXG4gICAgICAxOTQsXG4gICAgICAxMzUsXG4gICAgICAyNyxcbiAgICAgIDE4OSxcbiAgICAgIDcxLFxuICAgICAgMTA4LFxuICAgICAgNjYsXG4gICAgICAzNyxcbiAgICAgIDY1LFxuICAgICAgMTg5LFxuICAgICAgMTU4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDIsXG4gICAgICAyNDcsXG4gICAgICAyMDEsXG4gICAgICAyMixcbiAgICAgIDIsXG4gICAgICAxNDgsXG4gICAgICAzNCxcbiAgICAgIDIwMSxcbiAgICAgIDE0NyxcbiAgICAgIDEsXG4gICAgICA2NixcbiAgICAgIDQwLFxuICAgICAgMTM5LFxuICAgICAgMTA4LFxuICAgICAgMTgzLFxuICAgICAgMjQyLFxuICAgICAgMTUxLFxuICAgICAgNzksXG4gICAgICAyMDUsXG4gICAgICAxMzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPNjN5b2tIRVBTcm9MUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjRUcEZGbUlGTGRRN1cxYklMdzVubVVHSGlBSlE5YXBLdDF4NjRqTlBJMWc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibU9vaXNQMXN2TmhLcWQycCtBVm5yQTc0amEvYzdnT3BSTXhPVG9WYWZhZWhlYXBLWGQ1bk9ITnJNeW5xZ2lrQjB0RnBDcXdQaktxSXQ1NGdpdnpwQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUHNSWTZoV3ZVZXVMZ1hJSUJzclU2dWd0aHpWVTBpNXlzTmgxZEZqNEZ6NkJQMTYwdHpvNnZGQmkxekprVVpZU2dEdmErUi9hZ09FRUJVTmZmSi9XaWc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMjY2MzY4NTQ2ODozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI0ODE5ODU3NjAzODExNjozQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkVvemEgQXRsYXNcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyNjYzNjg1NDY4OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgODhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDE5NDU1MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1RbFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTVFsLmpzb24iOiAie1wia2V5RGF0YVwiOlwiS0tGcVRyQkpXcGtWbHBKbkpndXlWNWpMK3RPS1lwbWtpYS92b0Vkb1psbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODk5MTQyMTI2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAxOTQ1NTYyNjRcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
