*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial,sans-serif;
}

body{
background:#0f172a;
color:white;
}

header{
padding:20px;
display:flex;
justify-content:space-between;
align-items:center;
background:#111827;
}

.logo{
font-size:30px;
font-weight:bold;
}

nav a{
color:white;
text-decoration:none;
margin-left:20px;
}

.hero{
text-align:center;
padding:100px 20px;
}

.hero h1{
font-size:55px;
margin-bottom:20px;
}

.hero p{
font-size:22px;
color:#cbd5e1;
margin-bottom:30px;
}

.btn{
display:inline-block;
background:#2563eb;
padding:15px 35px;
color:white;
text-decoration:none;
border-radius:10px;
}

.products{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:20px;
padding:40px;
}

.card{
background:#1e293b;
padding:20px;
border-radius:15px;
text-align:center;
}

.card h2{
margin-bottom:15px;
}

.price{
font-size:28px;
margin:15px 0;
font-weight:bold;
}
