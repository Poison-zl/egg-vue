'usestrict';
const egg = require('egg');
module.exports = class IndexController extends egg.Controller {
    async index() {
        let getTime = ()=>{
            return new Promise(resolve => {
                let redis = require('redis');
                let client = redis.createClient(this.config.redis);
                let time = String(Date.parse(new Date()))
                client.on("error", function (err) {
                    console.log("redis client连接失败", err);
                });
                client.on('ready', function (res) {
                    console.log('client ready');
                });
                client.on('connect', function () {
                    setTimeout(function(){
                        client.set("PROCESS_TB_MS_USER_AREA", time, function () {
                            var read_var_3 = client.get("PROCESS_TB_MS_USER_AREA", function (err, reply) {
                                console.log("新PROCESS_TB_MS_USER_AREA：", reply);
                            });
                        });
                    },1000)

                    //client.quit();
                });
                client.get("PROCESS_TB_MS_USER_AREA",function(e,v){
                    resolve(v)
                    console.log('旧PROCESS_TB_MS_USER_AREA:'+v)
                });
            })
        }
        const result = this.service.article.getArtilceList();
        let val = await getTime()
        let o = {...result,v:val}
        console.log(o)
        await this.ctx.render('index/index.js', o);
    }

    async client() {
        const result = this.service.article.getArtilceList();
        await this.ctx.renderClient('index/index.js', result);
    }

    async list() {
        this.ctx.body = this.service.article.getArtilceList(this.ctx.query);
    }

    async detail() {
        const id = this.ctx.query.id;
    }
};