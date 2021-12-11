var express = require('express');
var app = express();
var path = require('path');

const server = require('http').createServer(app)
const io = require('socket.io')(server)

// set the view engine to ejs

app.set ('view engine', 'ejs');
// use res.render to load up an ejs view file

// index page
let dataa = []

app.get('/', function(req, res, next) {
const puppeteer = require('puppeteer');

(async () => {
 /* const browser = await puppeteer.launch(

{
 args: [
            '--no-sandbox',
            '--disable-setuid-sandbox'
        ]
}
);*/

//const page = await browser.newPage();

let domains = [
'https://amaramd.com',
'https://centerforsight.net',
'https://useyecom',
'https://centerforsightnaples.net',
'https://carolinaeyecare.com',
'https://ramseyfoxtrail.com',
'https://princetonfoxtrail.com',
'https://woodclifflakefoxtrail.com',
'https://greenbrookfoxtrail.com',
'https://montvillefoxtrail.com',
'https://southriverfoxtrail.com',
'https://mahwahfoxtrail.com',
'https://hillsdalefoxtrail.com',
'https://parkridgefoxtrail.com',
'https://paramusfoxtrail.com',
'https://cresskillfoxtrail.com',
'https://moderneyesgb.com',
'https://fortmyerseyecenter.com',
'https://theoam.org',
'https://issaquahvision.net',
'https://acuitydoc.com',
'https://tvcarizona.com',
'https://budgetoptical.net',
'https://daytonoptometric.com',
'https://mttamoptometriccenter.com',
'https://valentineeyecare.com',
'https://pacificeyecareofportorchard.com',
'https://amarillovision.net',
'https://tec2020vision.com',
'https://energeyesmemberdirectory.org',
'https://abbeyeyecare.ca',
'https://woodbridgefamilyeyecare.com',
'https://capitalcityvisioncenter.com',
'https://masoneyeclinic.com',
'https://avveye.com',
'https://mauioptometry.com',
'https://mifamilyeyecare.com',
'https://rodgerssteinchiropractic.com',
'https://northstarolentangy.com',
'https://mattisoncrossing.com',
'https://visionconcepthtx.com',
'https://provisioncenters.com',
'https://brendeleyecare.com',
'https://martineye-care.com',
'https://eyediologyvisioncare.com',
'https://danielanddavisoptometry.com',
'https://drtoddlang.com',
'https://20x20.com',
'https://royalvistaeyecare.com',
'https://markhamoptometry.ca',
'https://rutlandoptometry.ca',
'https://littlefieldeyeassociates.com',
'https://drblaze.com',
'https://orchardparkoptometry.com',
'https://prairie.vision',
'https://eyelaboptometry.com',
'https://eyedocks.com',
'https://packandbianesvision.com',
'https://camarillovision.com',
'https://visiontherapysc.com',
'https://lodgelifede.com',
'https://welovedraincleaning.ca',
'https://sleepappliance.ca',
'https://eyesonplainville.com',
'https://bodenseniorliving.com',
'https://avenueoptometry.com',
'https://aisthetikos.ca',
'https://sunvalleyeyecare.ca',
'https://palermovillagedental.com',
'https://uppergagedental.ca',
'https://opti-illusions.com',
'https://foresee-eyecare.com',
'https://droliphant.ca',
'https://ottico.ca',
'https://symmetrydental.ca',
'https://blinkphx.com',
'https://stonespineanddisc.com',
'https://stanfordranchoptometry.com',
'https://roundlakeseniorliving.com',
'https://tceyecare.ca',
'https://tcoptometry.com',
'https://mcguganeyecare.com',
'https://vistaeyecare.ca',
'https://youreyeq.com',
'https://fremontvillageseniorliving.com',
'https://eastavenuevisioncenter.com',
'https://customer-portal.powersurgemarketing.ca',
'https://eastavenuevisioncenter.com',
'https://locations.twsl.com',
'https://metro-optics.com',
'https://theeyeandlasercenter.com',
'https://lesueureyecare.com',
'https://downtowneyecare.ca',
'https://hospitalityhouseca.com',
'https://peakdurango.com',
'https://towneyecareorillia.ca',
'https://pinnacleeyecare.com',
'https://city-optometry.com',
'https://towneyecare.ca',
'https://enoschiro.com',
'https://headwatersoptometry.com',
'https://eyesorangeville.net',
'https://headwaterseyecare.com',
'https://headwatersoptometry.ca',
'https://savesight.ca',
'https://chelseavisioncare.com',
'https://seaonechiro.com',
'https://mcguganoptometry.com',
'https://powersurgemarketing.ca',
'https://fogeyes.net',
'https://gregorysoptical.ca',
'https://beyond2020optometry.ca',
'https://smithchiropractichealthcare.com',
'https://cooperdental.ca',
'https://spectrumvisionclinic.com',
'https://drdennisdc.com',
'https://sheppardleslieoptom.com',
'https://distinctive-liv.com',
'https://villadeanza.com',
'https://visus.ca',
'https://southwoodeyecare.com',
'https://hasselfamilychiro.com',
'https://losgatosvisioncare.com',
'https://calgaryoptometry.com',
'https://tutteyes.ca',
'https://vistahardenranch.com',
'https://hillcrestmemorycare.com',
'https://baysideeyecare.com',
'https://bixbyeyecenter.com',
'https://goldenhillsoptometry.net',
'https://maplebrookdental.ca',
'https://birringeyecare.com',
'https://laferlafamilyeyecare.com',
'https://optixgallery.com',
'https://2020doc.com',
'https://individualeyes.ca',
'https://villageoptical.ca',
'https://doctormann.ca',
'https://4starelectric.com',
'https://firstoptometry.ca',
'https://metro-eyecare.com',
'https://grandsouthsl.com',
'https://grandsouthseniorliving.com',
'https://discovereyecare.com',
'https://drshonah.ca',
'https://drjoncrum.com',
'https://westcoastoptical.com',
'https://drmarkchung.com',
'https://sheridandentalcentrecom',
'https://drscottcolonna.com',
'https://murrietagardens.com',
'https://oldsouthoptometry.com',
'https://markhamtowndental.ca',
'https://drbladh.com',
'https://prairie.vision',
'https://theeyecareteam.com',
'https://missionoptometry-totalvision.com',
'https://famfocuseye.com',
'https://demarchidental.com',
'https://herculesoptometry.com',
'https://totalvisioneastlake.com',
'https://ntoc.ca',
'https://theopticalconnection.com',
'https://sealbeacheyes.com',
'https://trinityhillseyecare.ca',
'https://culinarycoworking.com',
'https://cvopt.com',
'https://gnhroofing.ca',
'https://peacediagnosticimaging.com',
'https://sanclementeoptometry.com',
'https://royalzroofing.ca',
'https://mychestermereelectrician.com',
'https://mylangdonelectrician.com',
'https://mystrathmoreelectrician.com',
'https://hollywoodvision.com',
'https://citizen55.com',
'https://westridgeelectric.com',
'https://queenswayoptometric.com',
'https://simcoeoptometrists.com',
'https://brilliant-eyecare.com',
'https://smithfieldeyeandoptical.com',
'https://mmoweb.com',
'https://drhenslickvisioncenter.com',
'https://bentleyatlynchburg.com',
'https://yorkmillseyecare.com',
'https://bentleyatparagonvillage.com',
'https://bentleyatbranchville.com',
'https://5vines.com',
'https://bentleyatbedford.com',
'https://totalvisionlosangeles.com',
'https://totalvisionpacificeyecare.com',
'https://merryvaleal.com',
'https://2020lamesa.com',
'https://saranacvillage.com',
'https://mainstreetod.com',
'https://laeyecare.net',
'https://drpamelasheffield.com',
'https://mandalayoptical.com',
'https://ardentvision.ca',
'https://gtoptometric.com',
'https://richmondvisioncare.com',
'https://opticaleyeworks.ca',
'https://parkgardensfergusfalls.com',
'https://rsmoptometry.com',
'https://noblurr.com',
'https://2020eyecareoh.com',
'https://meadowviewassisted.com',
'https://northparkmadison.com',
'https://someroakseniorliving.com',
'https://southernlandplace.com',
'https://villagesgeorgetown.com',
'https://carrickglenseniorliving.com',
'https://villagesriverclub.com',
'https://masseyspringsseniorliving.com',
'https://providenceplaceseniorliving.com',
'https://goodworksunlimited.com',
'https://valleyviewseniorliving.com',
'https://bluegrasswayseniorliving.com',
'https://lakesidesenior.com',
'https://poplarestatesseniorliving.com',
'https://bartonlouisville.com',
'https://thevillagesmurfreesboro.com',
'https://hickorywoodsseniorliving.com',
'https://sugarcreeksenior.com',
'https://olivebranchseniorliving.com',
'https://thevillagesfarragut.com',
'https://bartonhousetn.com',
'https://windsorgardenssrliving.com',
'https://fountainsfranklin.com',
'https://oakridgeseniorliving.com',
'https://thesummitseniorliving.com',
'https://cedarhillsseniorliving.com',
'https://windsorgardens.com',
'https://daisyhillseniorliving.com',
'https://lmcoptometry.ca',
'https://optiquedelmar.com',
'https://ifocus-vision.com',
'https://ifocusod.com',
'https://drdavidstemley.com',
'https://totalvisiontierrasanta.com',
'https://arenaeyeworks.com',
'https://totalvisionsolanabeach.com',
'https://delmareyecare.com',
'https://lroptometry.com',
'https://totalvisionranchobernardo.com',
'https://tvceyes.com',
'https://ggeyecare.com',
'https://stclairoptometrist.com',
'https://reddeereyecare.com',
'https://stanopto.com',
'https://goodhopevision.com',
'https://seatoskyeyes.com',
'https://heritagepointedental.com',
'https://shuswapoptometric.ca',
'https://thompsonriversfamilyoptometry.com',
'https://clarityoptometry.com',
'https://seatoskyoptometry.com',
'https://dustinpestcontrol.com',
'https://miltoneyeandvisioncare.com',
'https://arboroakseniorlivingmn.com',
'https://calgaryconcussioncentre.com',
'https://calgaryconcussioncentre.ca',
'https://sterlingpointeseniorliving.com',
'https://lemongroveoptometry.com',
'https://heritagepointemn.com',
'https://pacificvieweyecare.com',
'https://mountangeltowers.com',
'https://eyeson34th.com',
'https://idealeyecare.ca',
'https://eyecure.com',
'https://trendzoptical.com',
'https://theclassicaleye.com',
'https://santehairrestoration.ca',
'https://santemedical.ca',
'https://cardinalviewseniorliving.com',
'https://highlandseniorliving.com',
'https://yourtotalvision.com',
'https://perceptioneyecare.ca',
'https://sugarloafseniorliving.com',
'https://legacyofdelano.com',
'https://legacyofstmichael.com',
'https://allsaintsseniorliving.com',
'https://fairwaypinesseniorliving.com',
'https://southgatedentalcentre.com',
'https://acuityvision.com',
'https://bvec.ca',
'https://diablovalleyeyes.com',
'https://yongeeyes.ca',
'https://bluewateroptometry.com',
'https://salisburyeyecare.com',
'https://alconaeyecare.com',
'https://northernvisioncare.com',
'https://salisburyeyecareandeyewear.com',
'https://leetmeldreweyecare.com',
'https://twsl.com',
'https://amherstvieweyecare.ca',
'https://eastfishkilleye.com',
'https://carefind.ca',
'https://perspectiveeyecenter.com',
'https://clarityeyedocs.ca',
'https://eyeglassgallery.ca',
'https://drbishop.com',
'https://theeyedoctors.ca',
'https://eldermark.com',
'https://servicemodel.eldermark.com',
'https://crm.eldermark.com',
'https://simplyconnect.me',
'https://covid19.simplyconnect.me',
'https://leadership.simplyconnect.me',
'https://resources.simplyconnect.me',
'https://notifync.com',
'https://nursecall.notifync.com',
'https://communications.notifync.com',
'https://eyezonenevada.com',
'https://green-sky.ca',
'https://leesair.com',
'https://trailsideeyecare.com',
'https://allamericanatcoram.com',
'https://risingstaroptometry.com',
'https://allamericanatraynham.com',
'https://allamericanatwarwick.com',
'https://allamericanatwashington.com',
'https://allamericanatwrentham.com',
'https://allamericanatkingston.com',
'https://islandeyecare.ns.ca',
'https://myeyesoptical.com',
'https://myeyesoptical.ca',
'https://allamericanatwareham.com',
'https://calgaryfamilyeyedoctors.com',
'https://vcc2020.com',
'https://allamericanathillsborough.com',
'https://allamericanatlondonderry.com',
'https://eyesonmaincarmel.com',
'https://eyesonchagrin.com',
'https://legacyeyecare.ca',
'https://opticaleyeland.com',
'https://INSIGHTEYECARE.CA',
'https://optimumwellnesscentres.com',
'https://specsonbloor.ca',
'https://humberbayeyecare.com',
'https://coalescebc.ca',
'https://coppervieweyecare.com',
'https://magallonsroofing.com',
'https://belcosafety.com',
'https://eccvision.com',
'https://outreachoptometry.ca',
'https://machaeyecare.com',
'https://tcoptometry.com']
for(i=260;i<domains.length;i++){

try{
  const browser = await puppeteer.launch(

{
 args: [
            '--no-sandbox',
            '--disable-setuid-sandbox'
        ]
}
);
const page = await browser.newPage()
 await page.setDefaultNavigationTimeout(20000);
page
/*    .on('console', message =>
      console.log(`${message.type().substr(0, 3).toUpperCase()} ${message.text()}`))
    .on('pageerror', ({ message }) => console.log(message))
    .on('response', response =>
      console.log(`${response.status()} ${response.url()}`))
    .on('requestfailed', request =>
      console.log(`${request.failure().errorText} ${request.url()}`))
    
    .on('console', message =>
      console.log(`${message.type().warning}`))
*/
	.on('console', (msg) => {



console.log('PAGE LOG:', msg.text())
dataa.push(msg.text())
console.log(dataa)
});

let val = domains[i]
console.log(domains[i])

  await page.goto(val);
//  await page.waitForNavigation({waitUntil: 'networkidle2'})
  await browser.close();

}catch(err) {
console.log(err)}
continue;
}

//io.on('connection', (socket)=>{
//socket.broadcast.emit('message',dataa)

   // })

})();









res.render('index');



});

//setInterval(function() {
io.on('connection', (socket)=>{
socket.emit('message',dataa)
    })
//}, 1000);


server.listen(3002,()=>{
console.log('online')
})
//app.listen(3002);
console.log('Server is listening on port 8080');
