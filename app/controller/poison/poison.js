module.exports = app => {
    return class PoisonController extends app.Controller {
        async index() {
            const { ctx } = this;
            await ctx.render('poison/poison.js', {message: 'poisonobjk'});
        }
    };
};