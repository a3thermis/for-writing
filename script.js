 const characters = [
               {
                    name: "无知者",
                    description: "看着炭治郎的眼睛，是时候给孩子写点了，这一张要开车的，别拖了，再拖养胃了怎么办",
                    meme: "image/meme-1.jpeg"

               } ,
                 {
                    name: "左右逢源",
                    description: "剩最后一章还没写完，打算等到什么时候，明年过年吗？",
                    meme: "image/meme-2.jpeg"

               } ,
                 {
                    name: "镜女",
                    description: "写个开头不难的，实在不行和g老师商量一下大纲怎么写",
                    meme: "image/meme-3.jpg"

               } ,
                 {
                    name: "她没有别的想法",
                    description: "三人约会挂机数月，fgyy还没上桌吃饭，请让春日吃口年轻力壮的fgyy",
                    meme: "image/meme-4.jpeg"

               } ,
                 {
                    name: "灯下",
                    description: "要上高速路了，别睡了！",
                    meme: "image/meme-5.jpg"

               } ,
               {
                    name:  "天梯",
                    description: "请善待自己的脑洞和醋，晾着太久迟早会忘记的",
                    meme: "image/meme-6.jpeg"

               } ,
               {
                    name: "流言",
                    description: "又是冲突戏份，加油",
                    meme: "image/meme-7.jpeg"

               } ,
               {
                    name: "岩与川",
                    description: "两个人在沙发上躺了好几个月，伽椰子在电视机里失望地看着你，快睡着了",
                    meme: "image/meme-8.jpeg"

               } ,
               {
                    name: "朝如日月",
                    description: "请尽快品尝，草莓保质期短，容易变质",
                    meme: "image/meme-9.webp"

               } ,
               {
                    name: "让她流血",
                    description: "冲突戏份很难写但已经抽到了就别挑食了，琢磨琢磨写就完了",
                    meme: "image/meme-10.jpg"

               } ,
                {
                    name: "双子盖饭",
                    description: "你还记得大纲是什么样吗？",
                    meme: "image/meme-11.jpeg"

               } ,
                 {
                    name: "如英",
                    description: "开头晾着俩星期，在害怕什么，怕发现自己是个绝望的文盲吗？",
                    meme: "image/meme-12.jpeg"

               } ,
                
                  {
                    name: "四两拨千斤",
                    description: "修完剩下几章开新车，新的牛岛，新的快乐，对自己的肾好点",
                    meme: "image/meme-13.jpeg"

               } , 
                  {
                    name: "怦然心动",
                    description: "准备发车，注意身心健康，请勿过度放纵",
                    meme: "image/meme-14.jpg"

               } ,
                
                  {
                    name: "伏黑短篇",
                    description: "请继续保持稳定输出，这是真的要吃饭的碗",
                    meme: "image/meme-15.jpg"

               } , 
                
           
            ];
            function drawCharacter(){                 
               const randomIndex =
                    Math.floor(Math.random() * characters.length);

                const selected = 
                    characters[randomIndex];

               const memeImage = 
                    document.getElementById("memeImage");
                    memeImage.classList.add("fade-out");
                setTimeout(function() {
                document.getElementById("result").textContent =
                    selected.name;
                document.getElementById("description").textContent =
                    selected.description;
                memeImage.src =
                    selected.meme + "?v=" + Date.now(); // 加上时间戳防止缓存
                    memeImage.classList.remove("fade-out");
                    }, 300); // 等待淡出动画完成后更新内容

           }