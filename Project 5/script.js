var story = [
    { dp: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"},
    { dp: "https://images.unsplash.com/photo-1514315384763-ba401779410f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWwlMjBwcm9maWxlfGVufDB8fDB8fHww", img: "https://images.unsplash.com/photo-1467632499275-7a693a761056?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWwlMjBwcm9maWxlfGVufDB8fDB8fHww" },
    { dp: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWwlMjBwcm9maWxlfGVufDB8fDB8fHww", img: "https://images.unsplash.com/photo-1440589473619-3cde28941638?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWwlMjBwcm9maWxlfGVufDB8fDB8fHww" },
    { dp: "https://images.unsplash.com/photo-1465145782865-09532f760e6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGVsJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D", img: "https://plus.unsplash.com/premium_photo-1669951867704-a78fd21fbbd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9kZWwlMjBwcm9maWxlfGVufDB8fDB8fHww" },
    { dp: "https://plus.unsplash.com/premium_photo-1661374927471-24a90ebd5737?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWwlMjBwcm9maWxlfGVufDB8fDB8fHww", img: "https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vZGVsJTIwcHJvZmlsZXxlbnwwfDF8MHx8fDA%3D" },
    { dp: "https://images.unsplash.com/photo-1456885284447-7dd4bb8720bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWwlMjBwcm9maWxlfGVufDB8fDB8fHww", img: "https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vZGVsJTIwcHJvZmlsZXxlbnwwfDF8MHx8fDA%3D" },
    { dp: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vZGVsJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D", img: "https://plus.unsplash.com/premium_photo-1673512198690-6439132f3187?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vZGVsJTIwcHJvZmlsZXxlbnwwfDF8MHx8fDA%3D" }
];
var storya = document.querySelector('.storiya')
var fs = document.querySelector('.full-screen')
var container = ""

function storyData() {
    story.forEach(function (val, idx) {
        container += `<div class="story">
        <img id="${idx}"src="${val.dp}" alt="">
    </div>`;

        storya.innerHTML = container
    })

    storya.addEventListener('click', function (dtls) {
        var storyimage = story[dtls.target.id].img
        // storyimage.forEach(function(multi,index){
        //     console.log(multi,index)
        // })
        // console.log(storyimage)
        fs.style.display = "block"
        fs.style.backgroundImage = `url(${storyimage})`
        setTimeout(function () {
            fs.style.display = "none"
        }, 3000)
    })
}
storyData()