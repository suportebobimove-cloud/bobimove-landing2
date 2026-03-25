import { useState, useEffect } from "react";
import Head from "next/head";

// ─── CONFIGURAÇÕES ──────────────────────────────────────────────
const whatsappNumber      = "5535997004763";
const playStoreMotorista  = "https://play.google.com/store/apps/details?id=com.bobimove.motorista";
const playStorePassageiro = "https://play.google.com/store/apps/details?id=com.bobimove.passageiro";
const appStorePassageiro  = "https://apps.apple.com/br/app/bobimove/id000000000";
// ────────────────────────────────────────────────────────────────

const STATS = [
  { value: "20%", label: "Comissão fixa" },
  { value: "PIX", label: "Pagamento rápido" },
  { value: "24h", label: "Suporte disponível" },
  { value: "R$0", label: "Taxas escondidas" },
];

export default function Home() {
  const [form, setForm]       = useState({ nome: "", email: "", whatsapp: "", tipo: "" });
  const [enviado, setEnviado] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (!form.nome || !form.email || !form.whatsapp || !form.tipo) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    const msg = encodeURIComponent(
      `Olá! Me chamo *${form.nome}*.\nSou *${form.tipo}* e quero saber mais sobre a Bobimove.\nE-mail: ${form.email}\nWhatsApp: ${form.whatsapp}`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, "_blank");
    setEnviado(true);
  };

  return (
    <>
      <Head>
        <title>Bobimove — Mobilidade Urbana</title>
        <meta name="description" content="Conectamos motoristas e passageiros com transparência. Comissão fixa 20%, sem taxas escondidas." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>

      <div style={s.page}>
        <style>{`
          * { box-sizing: border-box; margin: 0; padding: 0; }
          html { scroll-behavior: smooth; }
          body { font-family: 'Plus Jakarta Sans', sans-serif; }
          a:hover { opacity: 0.85; }
          .hero-in { opacity:0; transform:translateY(28px); transition:opacity .7s ease,transform .7s ease; }
          .hero-in.show { opacity:1; transform:translateY(0); }
          .d1{transition-delay:.05s} .d2{transition-delay:.2s}
          .d3{transition-delay:.35s} .d4{transition-delay:.5s} .d5{transition-delay:.65s}
          .card-h { transition:transform .25s,box-shadow .25s; }
          .card-h:hover { transform:translateY(-5px); box-shadow:0 16px 40px rgba(147,51,234,.14)!important; }
          .btn-p { transition:transform .2s,box-shadow .2s; }
          .btn-p:hover { transform:scale(1.04); box-shadow:0 10px 36px rgba(147,51,234,.45)!important; }
          input:focus, select:focus { border-color:#9333ea!important; box-shadow:0 0 0 3px rgba(147,51,234,.12); outline:none; }
          @media(max-width:640px){
            .hero-t { font-size:30px!important; }
            .stat-g { grid-template-columns:repeat(2,1fr)!important; }
            .nav-l { display:none!important; }
            .dl-g { flex-direction:column!important; align-items:center!important; }
            .sobre-g { grid-template-columns:1fr 1fr!important; }
            .cad-b { flex-direction:column!important; }
            .header-inner { padding:16px 20px!important; }
            .hero-inner { padding:70px 20px 60px!important; }
            .section-inner { padding:60px 20px!important; }
          }
        `}</style>

        {/* HEADER */}
        <header style={s.header}>
          <div className="header-inner" style={s.headerInner}>
            <div style={s.logo}>
              <span style={s.logoBobi}>Bobi</span><span style={s.logoMove}>move</span>
            </div>
            <nav style={s.nav} className="nav-l">
              {[["#sobre","Sobre"],["#servicos","Serviços"],["#apps","Apps"],["#cadastro","Cadastre-se"]].map(([h,l],i)=>
                <a key={i} href={h} style={s.navLink}>{l}</a>
              )}
            </nav>
            <a href="#cadastro" style={s.navCta}>Começar agora</a>
          </div>
        </header>

        {/* HERO */}
        <section style={s.hero}>
          <div style={s.blob1}/><div style={s.blob2}/>
          <div className="hero-inner" style={s.heroInner}>
            <div className={`hero-in d1 ${visible?"show":""}`} style={s.heroBadge}>🚀 Mobilidade Urbana</div>
            <h1 className={`hero-in d2 hero-t ${visible?"show":""}`} style={s.heroTitle}>
              Transporte inteligente,<br/>
              <span style={s.heroHL}>transparente e justo.</span>
            </h1>
            <p className={`hero-in d3 ${visible?"show":""}`} style={s.heroSub}>
              Conectamos motoristas e passageiros com preços claros e comissão fixa de{" "}
              <strong style={{color:"#fde68a"}}>20%</strong> — sem taxas escondidas, sem pegadinhas.
            </p>
            <div className={`hero-in d4 ${visible?"show":""}`} style={s.heroBtns}>
              <a href="#cadastro" style={s.heroBtn} className="btn-p">Quero me cadastrar</a>
              <a href="#apps" style={s.heroBtnO}>Baixar o app</a>
            </div>
            <div className={`hero-in d5 stat-g ${visible?"show":""}`} style={s.statGrid}>
              {STATS.map((st,i)=>(
                <div key={i} style={s.statItem}>
                  <span style={s.statV}>{st.value}</span>
                  <span style={s.statL}>{st.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" style={s.section}>
          <div className="section-inner" style={s.sectionInner}>
            <div style={s.sHead}>
              <p style={s.eyebrow}>Por que Bobimove?</p>
              <h2 style={s.sTitle}>Uma plataforma feita com respeito</h2>
              <p style={s.sSub}>Criada para quem trabalha de verdade e para quem valoriza qualidade.</p>
            </div>
            <div className="sobre-g" style={s.sobreGrid}>
              {[
                {icon:"🏆",title:"Comissão Fixa 20%",      text:"Sem variações, sem surpresas. Você sabe exatamente quanto ganha em cada corrida."},
                {icon:"🕐",title:"Trabalhe Quando Quiser",  text:"Você é o dono do seu tempo. Ligue o app quando quiser e desligue quando precisar."},
                {icon:"💳",title:"Pagamento via PIX",       text:"Receba rápido, direto na conta, sem burocracia nem taxas de saque."},
                {icon:"🛡️",title:"Plataforma Segura",       text:"Motoristas verificados, avaliações reais e suporte humano para qualquer situação."},
              ].map((c,i)=>(
                <div key={i} style={s.sobreCard} className="card-h">
                  <div style={s.sobreIcon}>{c.icon}</div>
                  <h3 style={s.sobreCardT}>{c.title}</h3>
                  <p style={s.sobreCardS}>{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section id="servicos" style={{...s.section, background:"#fafafa"}}>
          <div className="section-inner" style={s.sectionInner}>
            <div style={s.sHead}>
              <p style={s.eyebrow}>O que oferecemos</p>
              <h2 style={s.sTitle}>Nossos Serviços</h2>
              <p style={s.sSub}>Soluções completas de mobilidade para qualquer cidade.</p>
            </div>
            <div style={s.servicosGrid}>
              {[
                {emoji:"🚗",title:"Corridas",  text:"Transporte econômico, confortável e seguro para o dia a dia."},
                {emoji:"🏍️",title:"Mototaxi",  text:"Agilidade para percursos rápidos com segurança e praticidade."},
                {emoji:"📦",title:"Frete",      text:"Transporte de mercadorias com carros, motos e utilitários."},
              ].map((sv,i)=>(
                <div key={i} style={s.servicoCard} className="card-h">
                  <div style={s.servicoEmoji}>{sv.emoji}</div>
                  <h4 style={s.servicoT}>{sv.title}</h4>
                  <p style={s.servicoS}>{sv.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* APPS */}
        <section id="apps" style={s.appsSection}>
          <div className="section-inner" style={{...s.sectionInner, textAlign:"center"}}>
            <p style={{...s.eyebrow, color:"rgba(255,255,255,.65)"}}>Disponível agora</p>
            <h2 style={s.appsTitle}>Baixe o aplicativo</h2>
            <p style={s.appsSub}>Escolha seu perfil e comece agora mesmo.</p>
            <div className="dl-g" style={s.dlGroups}>
              <div style={s.dlGroup}>
                <p style={s.dlLabel}>🤖 Google Play</p>
                <div style={s.dlBtns}>
                  <a href={playStoreMotorista}  target="_blank" rel="noreferrer" style={s.dlBtn}>🚗 Motorista — Baixar</a>
                  <a href={playStorePassageiro} target="_blank" rel="noreferrer" style={s.dlBtn}>👤 Passageiro — Baixar</a>
                </div>
              </div>
              <div style={s.dlDivider}/>
              <div style={s.dlGroup}>
                <p style={s.dlLabel}>🍎 App Store</p>
                <div style={s.dlBtns}>
                  <a href={appStorePassageiro} target="_blank" rel="noreferrer" style={s.dlBtn}>👤 Passageiro — Baixar</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXPANSÃO */}
        <section style={{...s.section, textAlign:"center"}}>
          <div className="section-inner" style={s.sectionInner}>
            <p style={s.eyebrow}>Onde estamos e para onde vamos</p>
            <h2 style={s.sTitle}>Crescendo em todo o Brasil</h2>
            <p style={{...s.sSub, maxWidth:500, margin:"12px auto 36px"}}>
              Começamos com força e estamos expandindo rápido. A próxima cidade pode ser a sua.
            </p>
            <div style={s.cidadesBox}>
              {["Jacuí - MG","S. Sebastião do Paraíso - MG","Leme - SP","🗺️ Sua cidade em breve..."].map((c,i)=>(
                <span key={i} style={{...s.chip,...(i===3?s.chipNew:{})}}>{c}</span>
              ))}
            </div>
          </div>
        </section>

        {/* CADASTRO */}
        <section id="cadastro" style={{...s.section, background:"#fafafa"}}>
          <div className="section-inner cad-b" style={{...s.sectionInner, ...s.cadBox}}>
            <div style={s.cadLeft}>
              <p style={s.eyebrow}>Vamos começar?</p>
              <h2 style={s.cadTitle}>Faça parte da Bobimove</h2>
              <p style={s.cadSub}>Preencha o formulário e nossa equipe entra em contato pelo WhatsApp com tudo que você precisa saber.</p>
              <div style={{display:"flex",flexDirection:"column",gap:10,marginTop:24}}>
                {["✅ Cadastro gratuito","✅ Suporte dedicado","✅ Começa rápido"].map((p,i)=>(
                  <p key={i} style={{color:"#374151",fontWeight:600,fontSize:15}}>{p}</p>
                ))}
              </div>
            </div>
            <div style={s.cadRight}>
              {enviado ? (
                <div style={{textAlign:"center",padding:"30px 0"}}>
                  <div style={{fontSize:54,marginBottom:14}}>🎉</div>
                  <h3 style={{fontSize:22,fontWeight:800,color:"#9333ea",marginBottom:8}}>Mensagem enviada!</h3>
                  <p style={{color:"#6b7280",fontSize:15,lineHeight:1.7}}>
                    Você foi redirecionado ao nosso WhatsApp. Em breve nossa equipe entra em contato!
                  </p>
                </div>
              ) : (
                <div style={s.formBox}>
                  <h3 style={{fontSize:20,fontWeight:800,marginBottom:4,color:"#111827"}}>Preencha seus dados</h3>
                  {[
                    {name:"nome",     placeholder:"Nome completo",      type:"text"},
                    {name:"email",    placeholder:"E-mail",             type:"email"},
                    {name:"whatsapp", placeholder:"WhatsApp (com DDD)", type:"tel"},
                  ].map(f=>(
                    <input key={f.name} name={f.name} type={f.type} placeholder={f.placeholder}
                      value={form[f.name]} onChange={handleChange} style={s.input}/>
                  ))}
                  <select name="tipo" value={form.tipo} onChange={handleChange} style={s.input}>
                    <option value="">Sou... (selecione)</option>
                    <option value="Motorista">Motorista</option>
                    <option value="Passageiro">Passageiro</option>
                  </select>
                  <button onClick={handleSubmit} style={s.submitBtn} className="btn-p">
                    💬 Abrir WhatsApp e Cadastrar
                  </button>
                  <p style={{textAlign:"center",fontSize:12,color:"#9ca3af"}}>Seus dados estão seguros. Sem spam.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={s.footer}>
          <div style={{marginBottom:20}}>
            <span style={s.logoBobi}>Bobi</span><span style={{color:"#fff",fontWeight:900,fontSize:24}}>move</span>
          </div>
          <p style={{color:"rgba(255,255,255,.4)",fontSize:13,marginBottom:24}}>Mobilidade Urbana com Transparência</p>
          <div style={{height:1,background:"rgba(255,255,255,.08)",maxWidth:400,margin:"0 auto 24px"}}/>
          <p style={s.footerT}>📱 (35) 99700-4763</p>
          <p style={s.footerT}>🌐 bobimove.com.br</p>
          <p style={{...s.footerT,marginTop:20,opacity:.35,fontSize:12}}>© 2025 Bobimove. Todos os direitos reservados.</p>
        </footer>
      </div>
    </>
  );
}

const s = {
  page:{fontFamily:"'Plus Jakarta Sans',sans-serif",background:"#fff",color:"#111827"},
  header:{background:"#fff",boxShadow:"0 1px 0 #f0f0f0",position:"sticky",top:0,zIndex:100},
  headerInner:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"16px 48px",maxWidth:1200,margin:"0 auto"},
  logo:{fontSize:24,fontWeight:900,letterSpacing:"-0.5px"},
  logoBobi:{color:"#9333ea"},logoMove:{color:"#ef4444"},
  nav:{display:"flex",gap:32},
  navLink:{color:"#555",textDecoration:"none",fontWeight:600,fontSize:14},
  navCta:{background:"linear-gradient(135deg,#9333ea,#ef4444)",color:"#fff",padding:"10px 22px",borderRadius:50,fontWeight:700,fontSize:14,textDecoration:"none",boxShadow:"0 4px 14px rgba(147,51,234,.3)"},
  hero:{background:"linear-gradient(135deg,#6d28d9 0%,#9333ea 40%,#dc2626 100%)",color:"#fff",position:"relative",overflow:"hidden"},
  blob1:{position:"absolute",top:-80,right:-80,width:320,height:320,borderRadius:"50%",background:"rgba(255,255,255,.06)",pointerEvents:"none"},
  blob2:{position:"absolute",bottom:-60,left:-60,width:240,height:240,borderRadius:"50%",background:"rgba(255,255,255,.05)",pointerEvents:"none"},
  heroInner:{position:"relative",zIndex:1,maxWidth:700,margin:"0 auto",padding:"100px 40px 80px",textAlign:"center"},
  heroBadge:{display:"inline-block",background:"rgba(255,255,255,.18)",backdropFilter:"blur(8px)",borderRadius:50,padding:"7px 20px",fontSize:13,fontWeight:700,marginBottom:28,border:"1px solid rgba(255,255,255,.25)"},
  heroTitle:{fontSize:54,fontWeight:900,lineHeight:1.15,margin:"0 0 20px",letterSpacing:"-1.5px"},
  heroHL:{color:"#fde68a"},
  heroSub:{fontSize:18,opacity:.9,lineHeight:1.7,marginBottom:36},
  heroBtns:{display:"flex",gap:16,justifyContent:"center",flexWrap:"wrap",marginBottom:52},
  heroBtn:{background:"#fff",color:"#9333ea",padding:"15px 36px",borderRadius:50,fontWeight:800,fontSize:16,textDecoration:"none",boxShadow:"0 8px 28px rgba(0,0,0,.18)"},
  heroBtnO:{border:"2px solid rgba(255,255,255,.6)",color:"#fff",padding:"13px 32px",borderRadius:50,fontWeight:700,fontSize:16,textDecoration:"none"},
  statGrid:{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:1,background:"rgba(255,255,255,.12)",borderRadius:16,backdropFilter:"blur(8px)",border:"1px solid rgba(255,255,255,.2)",overflow:"hidden"},
  statItem:{display:"flex",flexDirection:"column",alignItems:"center",padding:"18px 12px",gap:4},
  statV:{fontSize:26,fontWeight:900,color:"#fff"},
  statL:{fontSize:12,opacity:.75,fontWeight:600},
  section:{background:"#fff"},
  sectionInner:{padding:"80px 48px",maxWidth:1100,margin:"0 auto"},
  sHead:{textAlign:"center",marginBottom:48},
  eyebrow:{color:"#9333ea",fontWeight:700,fontSize:13,textTransform:"uppercase",letterSpacing:1.5,marginBottom:10},
  sTitle:{fontSize:34,fontWeight:900,letterSpacing:"-0.5px",marginBottom:10},
  sSub:{color:"#6b7280",fontSize:16,lineHeight:1.7},
  sobreGrid:{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:20},
  sobreCard:{background:"#fff",borderRadius:20,padding:"32px 24px",border:"1px solid #f3e8ff",textAlign:"center",boxShadow:"0 4px 16px rgba(0,0,0,.04)"},
  sobreIcon:{fontSize:38,marginBottom:14},
  sobreCardT:{fontWeight:800,fontSize:16,marginBottom:8,color:"#6d28d9"},
  sobreCardS:{fontSize:14,color:"#6b7280",lineHeight:1.65},
  servicosGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:24,maxWidth:820,margin:"0 auto"},
  servicoCard:{background:"#fff",borderRadius:20,padding:"40px 28px",border:"1px solid #f3e8ff",textAlign:"center",boxShadow:"0 4px 16px rgba(0,0,0,.04)"},
  servicoEmoji:{fontSize:44,width:70,height:70,borderRadius:18,background:"#faf5ff",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 18px"},
  servicoT:{fontWeight:800,fontSize:18,marginBottom:8,color:"#111827"},
  servicoS:{fontSize:14,color:"#6b7280",lineHeight:1.65},
  appsSection:{background:"linear-gradient(135deg,#6d28d9,#9333ea 50%,#dc2626)"},
  appsTitle:{fontSize:34,fontWeight:900,color:"#fff",marginBottom:10,letterSpacing:"-0.5px"},
  appsSub:{color:"rgba(255,255,255,.8)",fontSize:16,marginBottom:44},
  dlGroups:{display:"flex",gap:0,justifyContent:"center",alignItems:"flex-start",flexWrap:"wrap"},
  dlGroup:{textAlign:"left",padding:"0 32px"},
  dlDivider:{width:1,background:"rgba(255,255,255,.2)",alignSelf:"stretch",margin:"0 8px"},
  dlLabel:{color:"rgba(255,255,255,.8)",fontWeight:700,fontSize:14,marginBottom:12},
  dlBtns:{display:"flex",flexDirection:"column",gap:10},
  dlBtn:{background:"rgba(255,255,255,.15)",color:"#fff",padding:"12px 24px",borderRadius:12,textDecoration:"none",fontWeight:700,fontSize:14,border:"1px solid rgba(255,255,255,.3)",backdropFilter:"blur(6px)"},
  cidadesBox:{display:"flex",gap:12,flexWrap:"wrap",justifyContent:"center"},
  chip:{background:"#f3e8ff",color:"#6d28d9",padding:"10px 20px",borderRadius:50,fontWeight:700,fontSize:14},
  chipNew:{background:"linear-gradient(135deg,#9333ea,#ef4444)",color:"#fff"},
  cadBox:{display:"flex",gap:60,alignItems:"flex-start",flexWrap:"wrap"},
  cadLeft:{flex:1,minWidth:260},
  cadTitle:{fontSize:32,fontWeight:900,letterSpacing:"-0.5px",margin:"10px 0 14px"},
  cadSub:{color:"#6b7280",fontSize:15,lineHeight:1.7},
  cadRight:{flex:1,minWidth:300},
  formBox:{background:"#fff",borderRadius:24,padding:"36px 32px",border:"1px solid #ede9fe",boxShadow:"0 12px 48px rgba(147,51,234,.10)",display:"flex",flexDirection:"column",gap:14},
  input:{padding:"14px 18px",borderRadius:12,border:"1.5px solid #e5e7eb",fontSize:15,background:"#fafafa",color:"#111827",fontFamily:"inherit",transition:"border-color .2s,box-shadow .2s"},
  submitBtn:{background:"linear-gradient(135deg,#9333ea,#ef4444)",color:"#fff",border:"none",borderRadius:12,padding:"16px",fontSize:16,fontWeight:800,cursor:"pointer",marginTop:4,boxShadow:"0 6px 22px rgba(147,51,234,.28)"},
  footer:{background:"#0f0f1a",padding:"56px 40px 40px",textAlign:"center"},
  footerT:{color:"rgba(255,255,255,.55)",fontSize:14,margin:"6px 0"},
};
