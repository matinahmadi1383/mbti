$(function () {
	$('#examStart').click(function() {
		$("#pageStart").hide();
		startExam();
		var result=[];
		examResult(result);
		examFinish(result);
	});
	
})
function startExam() {
	$(window).scrollTop(0)
	var question=[
	'جثه و هیکل؟',
	'پوست؟',
	'مو؟',
	'کنش و کردار؟',
	'کنش پنداری و رفتاری؟',
	'خواب؟']
	var balghami=[
	'درشت و چاق,چربی زیر پوستی زیاد,اندام و عضلات نرم و لخت',
	'چهره و پوست سفید,پوست معمولا سرد، مرطوب، نرم و شفاف',
	'موهای نرم، نازک، صاف و لخت,رشد مو زیاد و موهای پرپشت,ریزش مو نیستم',
	'کم انرژی، کم جنب و جوش، تنبل,حساس کسلی و بی حال,حرکات کند,بسیار پر حوصله,زود خسته میشوم',
	'افرادی راحت و بی قید به اکثر مسائل,همه چیز را راحت می گیرم و خود را درگیر چیزی نمی کنم,ریسک نمیکنم,با نظم,واقع نگر,روابظ اجتماعی ضعیف',
	'خواب سنگین و زیاد,هنگام برخاستن از خواب همچنان احساس کسالت دارم,دارای خر و پف'

	];
	var sodayi=[
	'لاغر، باریک، خشک، جرّه و ریزه، با استخوانهای نازک و کشیده. اندامهای خشك و بافت عضلاني کم',
	'خشک، چروکیده و بی طراوت و رنگ آن از حالت سفید کدر تا سبزه و تیره',
	'پرمو و دارای موهای خشک، ضخیم و یا مجعد(با تجعد یا فر ریز),ریزش مو نیستم',
	'حالات از آرام و کند و کم انرژی تا معمولی,با احتیاط و دقت صحبت می کنم,پر حرف,با خودم زیاد حرف میزنم,معمولا ناراحت یا بیشتر میخواهم تنها باشم',
	' دقیق، خشک، کم معاشرت، تابع مقررات، فنی، اغلب سمج، منظم، دور اندیش، كم احساس، منطقی، میانه رو، محاسبه گر ,دودل و وسواس در تصمیم گیری',
	'خواب خرگوشی(خواب هم به لحاظ طول و هم از نظر عمق، کم است), خوابهای آشفته و تیره و تار، کابوس، و دیدن خرابه ها و قبرستان ها در رؤیاها'
	];
	var damavi=[
	'هیکل درشت و بدنی عضلانی، چهارشانه و تنومند,قفسه سینه پهن و گشاد ',
	'گندم‌گون يا گلگون(سرخ و سفید) یا قرمز و پرخون و برافروخته',
	'موهای پر پشت، قابل انعطاف و ضخیم,رشد موها زیاد,دچار ریزش مو هستم',
	'سریع، چالاک و پر انرژی,خیلی مقاوم با سرعت عمل بالا,صدای بلند و رسا',
	'شجاع، جسور و دارای اعتماد به نفس بالا,عمولا رهبر گروه میشوم,خوش اخلاق، اجتماعی، برون گرا، صمیمی، خوشرو، دوست داشتنی، اهل بگو و بخند و آرام,عصبانی شوم غیر قابل کنترل میشوم',
	'تحمل بی خوابی را دارم,خوش خواب,خواب های سنگین'
	];
	var safravi=[
	'قدبلند، لاغر اندام، باریک و خشک,مفاصل واستخوان بندی درشت و برجسته',
	'گرم وخشک',
	'موهایی پر پشت، تیره، زبر و گاهی مجعد,دچار ریزش مو هستم',
	'بسیار پر انرژی و پر تحرک,در کارها چالاک، سریع و عجول,پر حرف هستم و سریع حرف میزنم',
	'اهوش، زیرک، تیزبین، حسّاس، حسود، آینده نگر، گاهی خیالباف، حاضرجواب، بازیگوش، متهوّر، کلّه شق و یکدنده,حافظه و قدرت یادگیری بالا,تند و تیز و بی قرار، عجول و نامنظم',
	'تحمل بی خوابی را ندارم',
	'کم، سبک و همراه با آشفتگى'
	];
	var questionN=[];
	for (var i = 0; i < question.length; i++) {
		questionN[i]=i;
	}
	shuffle(questionN)
	$(`#questionsBox`).append(`<lable>نسبت به سوال به جواب پاسخ دهید(جواب ندادن سوال به معنای متابق نبودن گزینه ها با شماست)</lable>`);
	for (var i = 0; i < question.length; i++) {
		$(`#questionsBox`).append(`
			<div class="examQuestion">
				<div class="questionText">${question[questionN[i]]}</div>
				<div class="questionOption">
					<form>
						<label><input type="radio" name="${question[questionN[i]]}" class="form-check-input" value="${question[questionN[i]]+1}">
							${balghami[questionN[i]]}
						</label>
						<label><input type="radio" name="${question[questionN[i]]}" class="form-check-input" value="${question[questionN[i]]+2}">
							${damavi[questionN[i]]}
						</label>
						<label><input type="radio" name="${question[questionN[i]]}" class="form-check-input" value="${question[questionN[i]]+3}">
							${sodayi[questionN[i]]}
						</label>
						<label><input type="radio" name="${question[questionN[i]]}" class="form-check-input" value="${question[questionN[i]]+4}">
							${safravi[questionN[i]]}
						</label>
					</form>
				</div>
			</div>
		`)
	}
	$(`#questionsBox`).append(`<div id="btns"><button id="examFinish" class="btn btn-primary" style="width:100px;height:50px">ثبت</button></div>`);
}
function examResult(result) {
	var checkAdd=false
	$('.questionOption form input').on('change', function() {
		var examValue = $(this).val();
		var examName = examValue.substr(0,examValue.length-1)
		var examOption = examValue.substr(examValue.length-1,1)
		for (var i = 0; i < result.length; i++) {
			if (result[i]==examName) 
			{
				checkAdd=true;
				result[i+1]=examOption;
			}
		}
		if (checkAdd==false)
		{
			result.push(examName);
			result.push(examOption);
		}
		checkAdd=false;
	});
}
function examFinish(result) {
	var score=0;
	$("#examFinish").click(function() {
		if (result=="") 
		{
			alert("لطفا حداقل به یک مورد پاسخ دهید")
		}
		else
		{
			$(`#questionsBox`).html("");
			var balghami=0,sodayi=0,damavi=0,safravi=0;
			for (var i = 0; i < result.length/2; i++) {
				var examName = result[i*2];
				var examOption = result[i*2+1];
				if (examName == "جثه و هیکل؟") 
				{
					score=5;
					switch(examOption)
					{
						case "1":
							balghami+=score;
						break;
						case "2":
							sodayi+=score;
						break;
						case "3":
							damavi+=score;
						break;
						case "4":
							safravi+=score;
						break;
					}
				}
				if (examName == "کنش و کردار؟") 
				{
					score=6;
					switch(examOption)
					{
						case "1":
							balghami+=score;
						break;
						case "2":
							sodayi+=score;
						break;
						case "3":
							damavi+=score;
						break;
						case "4":
							safravi+=score;
						break;
					}
				}
				if (examName == "مو؟") 
				{
					score=3;
					switch(examOption)
					{
						case "1":
							balghami+=score;
						break;
						case "2":
							sodayi+=score;
						break;
						case "3":
							damavi+=score;
						break;
						case "4":
							safravi+=score;
						break;
					}
				}
				if (examName == "کنش پنداری و رفتاری؟") 
				{
					score=5;
					switch(examOption)
					{
						case "1":
							balghami+=score;
						break;
						case "2":
							sodayi+=score;
						break;
						case "3":
							damavi+=score;
						break;
						case "4":
							safravi+=score;
						break;
					}
				}
				if (examName == "خواب؟") 
				{
					score=3;
					switch(examOption)
					{
						case "1":
							balghami+=score;
						break;
						case "2":
							sodayi+=score;
						break;
						case "3":
							damavi+=score;
						break;
						case "4":
							safravi+=score;
						break;
					}
				}
				if (examName == "پوست؟") 
				{
					score=3;
					switch(examOption)
					{
						case "1":
							balghami+=score;
						break;
						case "2":
							sodayi+=score;
						break;
						case "3":
							damavi+=score;
						break;
						case "4":
							safravi+=score;
						break;
					}
				}
			}
			var darsad = 100/(balghami+sodayi+safravi+damavi);
			var shenase = "",shenase2 = "",ENshenase="",ENshenase2="";
			var showMezaj = [
			balghami,
			damavi,
			sodayi,
			safravi];
			var showMezaj2 =[
			balghami,
			damavi,
			sodayi,
			safravi]
			showMezaj2.sort(function(a, b) {
  			return a - b;
			});
			if (showMezaj2[3]==showMezaj2[2])
			{
				if (showMezaj2[3]==showMezaj[0]){
					shenase="بلغمی";
					ENshenase="balghami";
				}
				else if (showMezaj2[3]==showMezaj[1]){
					shenase="سودایی";
					ENshenase="sodayi";
				}
				else if (showMezaj2[3]==showMezaj[2]){
					shenase="دموی";
					ENshenase="damavi";
				}
				else if (showMezaj2[3]==showMezaj[3]){
					shenase="صفراوی";
					ENshenase="safravi";
				}
				if (showMezaj2[2]==showMezaj[3]){
					shenase2="صفراوی";
					ENshenase2="safravi";
				}
				else if (showMezaj2[2]==showMezaj[2]){
					shenase2="دموی";
					ENshenase2="damavi";
				}
				else if (showMezaj2[2]==showMezaj[1]){
					shenase2="سودایی";
					ENshenase2="sodayi";
				}
				else if (showMezaj2[2]==showMezaj[0]){
					shenase2="بلغمی";
					ENshenase2="balghami";
				}
				$("#showScore").append(`<h4>مزاج شما به احتمال ۵۰%</h4><span style="font-size:1.5rem">${" "+shenase+" "}</span><h4>و به احتمال ۵۰%</h4><span style="font-size:1.5rem">${" "+shenase2+" "}</span><h4> است!</h4>
					<div style="display:flex;justify-content: space-evenly;">
					<a href="${ENshenase}.html">
						<button class="btn btn-warning" style="width:300px;height:100px;margin-left:20px">دیدن خصوصیت های شخصیتی من(${shenase})</button>
					</a>
					<a href="${ENshenase2}.html">
					<button class="btn btn-warning" style="width:300px;height:100px">دیدن خصوصیت های شخصیتی من(${shenase2})</button>
					</a></div>
				`)
			}
			else
			{
				if (showMezaj2[3]==showMezaj[0]){
					shenase="بلغمی";
					ENshenase="balghami";
				}
				else if (showMezaj2[3]==showMezaj[1]){
					shenase="سودایی";
					ENshenase="sodayi";
				}
				else if (showMezaj2[3]==showMezaj[2]){
					shenase="دموی";
					ENshenase="damavi";
				}
				else if (showMezaj2[3]==showMezaj[3]){
					shenase="صفراوی";
					ENshenase="safravi";
				}
				$("#showScore").append(`<h4>مزاج شما</h4><span style="font-size:1.5rem">${" "+shenase+" "}</span><h4> است!</h4>
					<div  style="display:flex;justify-content: space-evenly;"><a href="${ENshenase}.html"><button class="btn btn-warning" style="width:300px;height:100px;border-radius: 0px;line-height: 0px;">دیدن خصوصیت های شخصیتی من</button></a></div>
				`)
			}
		}
	});
}
function shuffle(array) {
  var currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}