xui.Class('App', 'xui.Module',{
    Instance:{
        autoDestroy:false,
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.APICaller")
                .setHost(host,"api_1")
                .setName("api_1")
                .setQueryURL("https://www.crossui.com/xui/backend/PHP/demo.php")
                .setQueryArgs({
                    "a":1,
                    "b":2
                })
                .beforeInvoke([
                    {
                        "desc":"Busy",
                        "type":"other",
                        "target":"msg",
                        "params":[ ],
                        "method":"busy"
                    }
                ])
                .onData([
                    {
                        "desc":"free UI",
                        "type":"other",
                        "target":"msg",
                        "params":[ ],
                        "method":"free"
                    }
                ])
                .onError([
                    {
                        "desc":"free UI",
                        "type":"other",
                        "target":"msg",
                        "params":[ ],
                        "method":"free"
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.Div")
                .setHost(host,"ctl_pane39")
                .setShowEffects("Blur")
                .setHideEffects("Blur")
                .setLeft("23.333333333333332em")
                .setTop("5em")
                .setWidth("30.833333333333332em")
                .setHeight("20.833333333333332em")
                .setCustomStyle({
                    "KEY":{
                        "background-color":"#000000"
                    }
                })
            );
            
            host.ctl_pane39.append(
                xui.create("xui.UI.Group")
                .setHost(host,"ctl_group1")
                .setLeft("1.6666666666666667em")
                .setTop("5em")
                .setWidth("28.333333333333332em")
                .setHeight("13.083333333333334em")
                .setOverflow("hidden")
                .setCaption("URL")
                .setToggleBtn(false)
            );
            
            host.ctl_group1.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton6")
                .setDesc("URL Test 1")
                .setLeft("4.916666666666667em")
                .setTop("0.8333333333333334em")
                .setWidth("8.333333333333334em")
                .setHeight("2.5em")
                .setCaption("URL Test 1")
                .onClick([
                    {
                        "desc":"self",
                        "type":"other",
                        "target":"url",
                        "params":[
                            "https://www.crossui.com"
                        ],
                        "method":"open--_self"
                    }
                ])
            );
            
            host.ctl_group1.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton7")
                .setDesc("URL Test 2")
                .setLeft("0.75em")
                .setTop("6.666666666666667em")
                .setWidth("8.333333333333334em")
                .setHeight("2.5em")
                .setCaption("URL Test 2")
                .onClick([
                    {
                        "desc":"blank",
                        "type":"other",
                        "target":"url",
                        "params":[
                            "https://www.crossui.com"
                        ],
                        "method":"open--_blank"
                    }
                ])
            );
            
            host.ctl_group1.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton8")
                .setDesc("URL Test 3")
                .setLeft("9.916666666666666em")
                .setTop("6.666666666666667em")
                .setWidth("8.333333333333334em")
                .setHeight("2.5em")
                .setCaption("Email Test")
                .onClick([
                    {
                        "desc":"email",
                        "type":"other",
                        "target":"url",
                        "params":[
                            "linb@crossui.com"
                        ],
                        "method":"mailTo"
                    }
                ])
            );
            
            host.ctl_group1.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"xui_ui_htmlbutton47")
                .setDesc("URL Test 3")
                .setLeft("19.166666666666668em")
                .setTop("6.666666666666667em")
                .setWidth("8.333333333333334em")
                .setHeight("2.5em")
                .setCaption("Email Test")
                .onClick([
                    {
                        "desc":"email",
                        "type":"other",
                        "target":"url",
                        "params":[
                            "linb@crossui.com"
                        ],
                        "method":"mailTo"
                    }
                ])
            );
            
            host.ctl_group1.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"xui_ui_htmlbutton48")
                .setDesc("URL Test 1")
                .setLeft("14.916666666666666em")
                .setTop("0.8333333333333334em")
                .setWidth("8.333333333333334em")
                .setHeight("2.5em")
                .setCaption("URL Test 1")
                .onClick([
                    {
                        "desc":"self",
                        "type":"other",
                        "target":"url",
                        "params":[
                            "https://www.crossui.com"
                        ],
                        "method":"open--_self"
                    }
                ])
            );
            
            host.ctl_pane39.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ctl_slabel8")
                .setSpaceUnit("px")
                .setLeft("10px")
                .setTop("10px")
                .setWidth("364px")
                .setHeight("47px")
                .setCaption("Meco Foco")
                .setHAlign("center")
                .setCustomStyle({
                    "KEY":{
                        "color":"#FFFFFF",
                        "font-family":"trebuchet ms,helvetica,sans-serif",
                        "font-size":"28px",
                        "font-weight":"900",
                        "opacity":0.8
                    }
                })
            );
            
            host.ctl_pane39.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label2")
                .setSpaceUnit("px")
                .setLeft("30px")
                .setTop("40px")
                .setWidth("324px")
                .setHeight("47px")
                .setCaption("By: Andrés Castellá")
                .setHAlign("center")
                .setCustomStyle({
                    "KEY":{
                        "color":"#FFFFFF",
                        "font-family":"trebuchet ms,helvetica,sans-serif",
                        "font-size":"14px",
                        "font-weight":"900",
                        "opacity":0.8
                    }
                })
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },
        events:{
            "onRender":[
                {"desc":"message", 
                 "type":"other", 
                 "target":"msg", 
                 "params":[
                     "This is in conf!", 
                     "Page on render"
                 ], 
                 "scope":null, 
                 "method":"message"
                }
            ]
        }
    }
});