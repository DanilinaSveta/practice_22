//ограничение вводимого числа символов
$('body').on('input', 'input[type="number"][maxlength]', function(){
    if (this.value.length > this.maxLength){
      this.value = this.value.slice(0, this.maxLength);
    }
});
//открывает и закрывает дополнительные окна
$(function(){
    $('#mySelect').change(test);
    function test(){
        var o={
            '1': function ff(){
                    document.getElementById('fv').style.display = 'block';
                    document.getElementById('table').style.display = "none"; 
                    document.getElementById('select_v').style.display = 'none'},
            '2': function ff(){ 
                    document.getElementById('fv').style.display = 'none';
                    document.getElementById('select_v').style.display = 'block'},
            '3': function ff(){
                    document.getElementById('fv').style.display = 'block'; 
                    document.getElementById('table').style.display = "none";
                    document.getElementById('select_v').style.display = 'none'},
            '4': function ff(){
                    document.getElementById('fv').style.display = 'block';
                    document.getElementById('table').style.display = "none"; 
                    document.getElementById('select_v').style.display = 'none'}
        };
        var key=$('#mySelect').val();
        var val=o[key]? o[key]: '';
        $('.price').text(val);
    };
    test();
});
//считывание данных, которые ввел пользователь
    let height = document.querySelector(".height");
    let weight = document.querySelector(".weight");

    let urk = document.querySelector(".URK");
    let urna = document.querySelector(".URNa");
    let Urine = document.querySelector(".urine");
    let posm = document.querySelector(".Posm");
    let uosm = document.querySelector(".Uosm");
    let serNa = document.querySelector(".SerNa");
    let cr = document.querySelector(".Cr");
    let uCr = document.querySelector(".UCr");
    let bun = document.querySelector(".BUN");

    let button = document.querySelector('button');

//работает при нажатии на кнопку
button.onclick = function (){
    let counter = 0;
    //преобразует в чиловой формат, то что ввел пользователь
    let Hei = +height.value;
    let Wei = +weight.value;    
    let URK = +urk.value;
    let URNa = +urna.value;
    let urina = +Urine.value;
    let Posm = +posm.value;
    let Uosm = +uosm.value;
    let SerNa = +serNa.value;
    let Cr = +cr.value;
    let UCr = +uCr.value;
    let BUN = +bun.value;

    //проверка вводимых данных
    str_error = "Ошибка \nпроверьте вводимые данные:";
    if ((Hei<20 || Hei>300)){
        str_error += "\nВозраст";
    }
    if ((Wei<0.1 || Wei>499)){
        str_error += "\nВес";
    }
    if ((URK<0 || URK>9999 || URK==null || URK=="")){
        str_error +="\nURK";
    }
    if ((urina<0 || urina>5000 || urina==null || urina=="")){
        str_error += "\nмоча";
    }
    if ((Posm<100 || Posm>500)){
        str_error += "\nPosm";
    }
    if ((Uosm<200 || Uosm>2000)){
        str_error += "\nUosm";
    }
    if ((SerNa<50 || SerNa>300)){
        str_error += "\nSerNa";
    }
    if ((Cr<0 || Cr>200 || Cr==null || Cr=="")){
        str_error += "\nCr";
    }
    if ((UCr<100 || UCr>50000)){
        str_error += "\nUCr";
    }
    if ((BUN<0 || BUN>10 || BUN==null || BUN=="")){
        str_error += "\nBUN";
    }
    
    if ((Hei<20 || Hei>300) || (Wei<0.1 || Wei>499) || (URK<0 || URK>9999)
     || (urina<0 || urina>5000) || (Posm<100 || Posm>500) || (Uosm<200 || Uosm>2000)
     || (SerNa<50 || SerNa>300) || (Cr<0 || Cr>200) || (UCr<100 || UCr>50000) ||(BUN<0 || BUN>10)){
        alert(str_error);
        counter+=1;
    }
    else{counter=0;}
//если данные верные, то высчитываются расчетные данные
    if(counter===0){
    //расчетные данные
        let ppt = Math.sqrt(Hei*Wei/3600);
        Ur_Na_Ex = urina*URNa/1000;
        URKEx = urina*URK/1000;
        Na_K = 100*URNa/URK; //Na/K
        CNa = URNa*urina/SerNa;
        Clcr = UCr*urina/Cr/(ppt/1.73)/1440;
        FENa = 100*(URNa*Cr)/(SerNa*UCr);
        Cosm = Uosm*urina/Posm/1440;
        ch = urina*(1-Uosm/Posm)/24; //CH2O
        U_Posm = Uosm/Posm;  //U/Posm
        BUN_Cr = 1000*BUN/Cr; // BUN/Cr
        U_Cr = UCr/Cr; // U/Cr*/
       
        //проверка расчетных данных на вхождение в диапазон
        if (Ur_Na_Ex>102){arrow = "\u2191";}
        else if (Ur_Na_Ex<51){ arrow = "\u2193";}
        else { arrow="\u0020"}
        
        if (URKEx>260){ arrow2 = "\u2191"; }
        else if (URKEx<130){arrow2 = "\u2193";}
        else { arrow2="\u0020"}
    
        if (Clcr>120){ arrow5 = "\u2191"; }
        else if (Clcr<80){arrow5 = "\u2193";}
        else { arrow5="\u0020"}
        
        if (Cosm>3){ arrow7 = "\u2191"; }
        else if (Cosm<2){arrow7 = "\u2193";}
        else { arrow7="\u0020"}

        if (ch>(-25)){ arrow8 = "\u2191"; }
        else if (ch<(-120)){arrow8 = "\u2193";}
        else { arrow8="\u0020"}

        if (U_Posm>4.5){ arrow9 = "\u2191"; }
        else if (U_Posm<3){arrow9 = "\u2193";}
        else { arrow9="\u0020"}

        //обработка infinity
        if (URK == 0){
            Na_K = " ";
            document.querySelector(".div3").innerHTML = " ";
        }
        else {
            document.querySelector(".div3").innerHTML = "Na/K = ";
        }
        if (Cr == 0){
            Clcr = " ";
            BUN_Cr = " ";
            U_Cr = " ";
            document.querySelector(".div5").innerHTML = " ";
            arrow5 = " ";
            document.querySelector(".div10").innerHTML = " ";
            document.querySelector(".div11").innerHTML = " ";

        }
        else{
            Clcr = Clcr.toFixed(3);
            BUN_Cr = BUN_Cr.toFixed(3);
            U_Cr = U_Cr.toFixed(3);
            document.querySelector(".div5").innerHTML = "Clcr = ";
            document.querySelector(".div10").innerHTML = "BUN/Cr = ";
            document.querySelector(".div11").innerHTML = "U/Cr = ";
        }
    //переключение отображения "единицы измерения" и "диапазон"
    $(function(){
        $('#mySelect2').change(test);
        function test(){
            var o={
                '5':  function ff_v(){
                    document.getElementById('mdiv1').style.display = 'inline';
                    document.getElementById('mdiv_1').style.display = "none";
                    document.getElementById('dppt2').style.display = 'inline';
                    document.getElementById('mdiv2').style.display = 'inline';
                    document.getElementById('mdiv_2').style.display = 'none';
                    document.getElementById('mdiv3').style.display = 'inline';
                    document.getElementById('mdiv4').style.display = 'inline';
                    document.getElementById('mdiv5').style.display = 'inline';
                    document.getElementById('mdiv_5').style.display = 'none';
                    document.getElementById('mdiv6').style.display = 'inline';
                    document.getElementById('mdiv7').style.display = 'inline';
                    document.getElementById('mdiv_7').style.display = 'none';
                    document.getElementById('mdiv8').style.display = 'inline';
                    document.getElementById('mdiv_8').style.display = 'none';
                    document.getElementById('mdiv9').style.display = 'inline';
                    document.getElementById('mdiv_9').style.display = 'none';
                    document.getElementById('mdiv10').style.display = 'inline';
                    document.getElementById('mdiv11').style.display = 'inline';
                    if (URK == 0){
                        document.getElementById('mdiv3').style.display = 'none';
                    }
                    if (Cr == 0){
                        document.getElementById('mdiv5').style.display = 'none';
                        document.getElementById('mdiv10').style.display = 'none';
                        document.getElementById('mdiv11').style.display = 'none';
                    }
                },         
                '6': 
                 function ff_v(){
                    document.getElementById('mdiv1').style.display = 'none';
                    document.getElementById('mdiv_1').style.display = "inline";
                    document.getElementById('dppt2').style.display = 'none';
                    document.getElementById('mdiv2').style.display = 'none';
                    document.getElementById('mdiv_2').style.display = 'inline';
                    document.getElementById('mdiv3').style.display = 'none';
                    document.getElementById('mdiv4').style.display = 'none';
                    document.getElementById('mdiv5').style.display = 'none';
                    document.getElementById('mdiv_5').style.display = 'inline';
                    document.getElementById('mdiv6').style.display = 'none';
                    document.getElementById('mdiv7').style.display = 'none';
                    document.getElementById('mdiv_7').style.display = 'inline';
                    document.getElementById('mdiv8').style.display = 'none';
                    document.getElementById('mdiv_8').style.display = 'inline';
                    document.getElementById('mdiv9').style.display = 'none';
                    document.getElementById('mdiv_9').style.display = 'inline';
                    document.getElementById('mdiv10').style.display = 'none';
                    document.getElementById('mdiv11').style.display = 'none';
                    if (Cr == 0){
                        document.getElementById('mdiv_5').style.display = 'none';
                    }
                }            
            };
            var key=$('#mySelect2').val();
            var val=o[key]? o[key]: '';
            $('.price2').text(val);
        };
        test();
    });  
        document.getElementById('table').style.display = "block"
        //вывод расчитанных данных
        document.querySelector(".dppt").innerHTML = "PPT = ";
        document.querySelector(".oppt").innerHTML = ppt;
        document.querySelector(".div1").innerHTML = "URNaEx = ";
        document.querySelector(".out1").innerHTML = Ur_Na_Ex;
        document.querySelector(".arrow1").innerHTML = arrow;
        document.querySelector(".div2").innerHTML = "URKEx = ";
        document.querySelector(".out2").innerHTML = URKEx;
        document.querySelector(".arrow2").innerHTML = arrow2;
        document.querySelector(".out3").innerHTML = Na_K;
        document.querySelector(".div4").innerHTML = "CNa = ";
        document.querySelector(".out4").innerHTML = CNa.toFixed(3);
        document.querySelector(".out5").innerHTML = Clcr;
        document.querySelector(".arrow5").innerHTML = arrow5;
        document.querySelector(".div6").innerHTML = "FENA = ";
        document.querySelector(".out6").innerHTML = FENa.toFixed(3);
        document.querySelector(".div7").innerHTML = "Cosm = ";
        document.querySelector(".out7").innerHTML = Cosm.toFixed(3);
        document.querySelector(".arrow7").innerHTML = arrow7;
        document.querySelector(".div8").innerHTML = "CH2O = ";
        document.querySelector(".out8").innerHTML = ch.toFixed(3);
        document.querySelector(".arrow8").innerHTML = arrow8;
        document.querySelector(".div9").innerHTML = "U/Posm = ";
        document.querySelector(".out9").innerHTML = U_Posm.toFixed(3);
        document.querySelector(".arrow9").innerHTML = arrow9;
        document.querySelector(".out10").innerHTML = BUN_Cr;
        document.querySelector(".out11").innerHTML = U_Cr;
    }
}