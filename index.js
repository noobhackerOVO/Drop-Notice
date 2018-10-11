const config = require('./config.json');
const Command = require('command');
module.exports = function dropnotice(dispatch) {
const command = Command(dispatch)
let enabled = config.toggle;

command.add('dropnotice', () => {
enabled = !enabled
command.message(`Drop-Notice is now ${enabled ? 'enabled' : 'disabled'}.`)})

dispatch.hook('S_SPAWN_DROPITEM', 6, (event) => {
if(!enabled) return;
if(event.item === 369)
command.message('<font color="#FF0000" size="30">╰鑽石╯')
else if(event.item === 98513)
command.message('<font color="#FFFFFF" size="30">神秘聖水')
else if(event.item === 98281)
command.message('<font color="#FF0000" size="30">╰傳説刻印書箱子╯')
else if(event.item === 98532)
command.message('<font color="#FF0000" size="30">╰呼嘯裝備箱╯')
else if(event.item === 98531)
command.message('<font color="#FF0000" size="30">╰冰冷裝備箱╯')
else if(event.item === 368)
command.message('<font color="#FFFFFF" size="30">╰綠寶石╯')
else if(event.item === 98502)
command.message('<font color="#FF0000" size="30">╰金色鈑金圖╯')
else if(event.item === 98516)
command.message('<font color="#FF0000" size="30">╰銀色鈑金圖╯')
else if(event.item === 98590)
command.message('<font color="#FF0000" size="30">╰最后的元素╯')
else if(event.item === 98599)
command.message('<font color="#FFFFFF" size="30">╰恶魔的脚爪╯')
else if(event.item === 98553)
command.message('<font color="#FFFFFF" size="30">╰玲珑的大地之石╯')
else if(event.item === 98554)
command.message('<font color="#FFFFFF" size="30">╰玲珑的暴风之石╯')
else if(event.item === 88637)
command.message('<font color="#FF0000" size="30">╰无限面具╯')
else if(event.item === 88634)
command.message('<font color="#FF0000" size="30">╰初始面具╯')
else if(event.item === 88827)
command.message('<font color="#FF0000" size="30">╰腰带增幅剂I╯')
else if(event.item === 88828)
command.message('<font color="#FF0000" size="30">╰项链增幅剂I╯')
else if(event.item === 88829)
command.message('<font color="#FF0000" size="30">╰耳环增幅剂I╯')
else if(event.item === 88830)
command.message('<font color="#FF0000" size="30">╰戒指增幅剂I╯')
else if(event.item === 88831)
command.message('<font color="#FF0000" size="30">╰饰环增幅剂I╯')
else if(event.item === 6780)
command.message('<font color="#FF0000" size="30">╰耳環刻印書-野獸强打III╯')
else if(event.item === 98600)
command.message('<font color="#FFFFFF" size="30">╰龍的骨头╯')
else if(event.item === 98501)
command.message('<font color="#FF0000" size="30">╰金色碎片圖╯')
else if(event.item === 98515)
command.message('<font color="#FF0000" size="30">銀色碎片圖')
})
}

