var orient = 0;
var uiTick;

sdkTemplates.dialogWindows.typeD = {
    type:'wrapper', 
    class:'dialog typeD',
    children:[
    {type:'wrapper', class:'header', flex:'h', children:[
            {type:'title'}, 
            {type:'bar', flexC:'h', color:'gold2'}
        ]},
        {type:'wrapper', class:'footer', flex:'h', children:[
            {type:'bar', color:'gold1', flexC:'h'}]
        },
        {type:'wrapper', 
        class:'content', 
        flex:'h', 
        hidden:true, 
        fade:true, 
        children:[
            {type:'wrapper', class:'column', children:[
               {type:'button',
                id:'btn_test', 
                attrs:[{attr:'target', value:'_blank'}], 
                color:'green2',           
                template:[{type:'block', class:'numericBlock'}, 
                {type:'button'}], 
                href:'http://localhost:3001', 
                label:'test'},
            ]},
            {type:'wrapper', class:'column', id:'wpr_svg1', children:[
                {type:'wrapper', id:'results', children:'<h1>New Release - 14278.102</h1><p>FIXED AN ISSUE BECAUSE OF ACCIDENTAL STRINGED BOOLEAN AND SOME COSMETIC TWEAKS.'}
                ]}

            ]}
        ]}
        

var uiView = {
    type:'wrapper', 
    class:'scaler', 
    children:[
        {type:'dialog', id:'wpr_streamDialog', hidden:true, fade:true, headerTitle:'LCARS SDK 14278.102', template:sdkTemplates.dialogWindows.typeD, show:function(){$('#wpr_footer').showObject({timing:350});}},
        {type:'wrapper', id:'wpr_footer', hidden:true, fade:true, show:function(){$('#wpr_streamDialog .content').showObject({});}, children:[
            {type:'wrapper', class:'row', flex:'h', children:[
                {type:'numericButton', id:'btn_email', color:'blue3', nbValue:'562',  template:[
                    {type:'button', href:'mailto:contact@lcarssdk.org'}, 
                    {type:'block'}, 
                    {type:'block', class:'numericBlock'}], 
                label:'email'},
            {type:'numericButton', id:'btn_lcars', attrs:[{attr:'target', value:'_blank'}], color:'green2', nbValue:'685431',  template:[{type:'block', class:'numericBlock'}, {type:'button'}], href:'http://en.wikipedia.org/wiki/LCARS', label:'lcars'},
        ]},
        {type:'wrapper', class:'row', flex:'h', children:[
            {type:'numericButton', 
                id:'btn_repo', 
                color:'blue4', 
                nbValue:'648', 
                attrs:[{attr:'target', value:'_blank'}], 
                template:[{type:'button'}, 
            {type:'block', color:'green3'}, 
            {type:'block', class:'numericBlock'}], 
        href:'https://github.com/AricwithanA/LCARS-SDK', label:'REPOSITORY ACCESS'},
            {type:'numericButton', id:'btn_wiki', color:'green3', attrs:[{attr:'target', value:'_blank'}], nbValue:'023251', template:[{type:'block', class:'numericBlock'}, {type:'button'}, {type:'cap', version:'right', color:'blue4'}], href:'https://github.com/AricwithanA/LCARS-SDK/wiki', label:'database'},
        ]}       
    ]}
]}


$(document).ready(function(){  
    $(uiView).createObject({appendTo:'body', success:initFunc});

    $(window).on("orientationchange",function(event){
        //orient = (window.orientation).toString();
        //$('#btn_test').objectSettings({label:(orient)});
        //alert(window.orientation);
        initFunc();
  });
});

function gotoWarp(){

}

function doScaler(){
    $('#btn_test').objectSettings({label: (orient)});
    if(window.orientation == "90" || window.orientation == "-90"){
        $('.scaler').css("width", "1036");
        $('.scaler').css("height", "550");
        $('.scaler').viewport('scale', {width:1036, height:551, max:true})

    } else {
        $('.scaler').css("width", "550");
        $('.scaler').css("height", "1036");
        $('.scaler').viewport('scale', {width:550, height:1036, max:true})        
    }    
}

function initFunc(){
    doScaler();
    
    window.onresize = function(event) {
        doScaler();
    } 
    
    if(uiTick){
        clearTimeout(timer_gear);
    }

    uiTick = setInterval(function(){
        $('#btn_lcars, #btn_wiki').each(function(){
            var newValue = Math.floor(Math.random()*900000) + 100000
            $(this).objectSettings({nbValue:newValue.toString()});
        });        
    },1000);

    $('#btn_email, #btn_repo').each(function(){
        var newValue = Math.floor(Math.random()*900) + 100
        $(this).objectSettings({nbValue:newValue.toString()});
    }); 
    
    $('#wpr_streamDialog').showObject({timing:350});
}

