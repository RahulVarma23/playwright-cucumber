const playwright = require("playwright")
const{Before,After,BeforeAll,AfterAll} = require('@cucumber/cucumber')

BeforeAll(async()=>{
    console.log('Launching the browser')
    global.browser = await playwright["chromium"].launch({headless:false, args: ['--start-fullscreen']})
})

AfterAll(async()=>{
    console.log('Closing the browser')
    await global.browser.close()
})

Before(async()=>{
    console.log('launch context and page')
    global.context = await global.browser.newContext()
    global.page = await global.context.newPage()
    await global.page.setViewportSize({ width: 2560, height: 1440 })

})

After(async()=>{
    console.log('close context and page')
    await global.page.close()
    await global.context.close()
})