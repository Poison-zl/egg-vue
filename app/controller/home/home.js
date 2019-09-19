module.exports = app => {
    return class HomeController extends app.Controller {
        async index() {
            const { ctx } = this;
            console.log(app.config.url)
            await ctx.render('home/home.js', {message: 'objk'});
        }
    };
};