// MovieVerse JavaScript
/* ===== Animated Aurora Background ===== */

body::before{
    content:"";
    position:fixed;
    inset:-30%;
    z-index:-2;

    background:
        radial-gradient(circle at 20% 20%,rgba(0,255,255,.35),transparent 35%),
        radial-gradient(circle at 80% 30%,rgba(0,128,255,.30),transparent 35%),
        radial-gradient(circle at 50% 80%,rgba(162,89,255,.30),transparent 40%),
        radial-gradient(circle at 90% 90%,rgba(0,255,170,.25),transparent 30%);

    filter:blur(90px);

    animation:auroraMove 20s ease-in-out infinite alternate;
}

body::after{
    content:"";
    position:fixed;
    inset:0;
    z-index:-1;

    background-image:
        radial-gradient(rgba(255,255,255,.15) 1px,transparent 1px);

    background-size:40px 40px;

    opacity:.35;
}

@keyframes auroraMove{

0%{
transform:translate(-8%,-6%) rotate(0deg);
}

50%{
transform:translate(8%,4%) rotate(180deg);
}

100%{
transform:translate(-5%,8%) rotate(360deg);
}

}
