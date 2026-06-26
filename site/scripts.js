const CONFIG = {

  /* ── Identidade ───────────────────────────────────────────── */
  nome:       "Sandro Alberti",               // aparece no hero e no footer
  titulo:     "Backend Developer",      // título grande do hero
  subtitulo:  "Construo APIs robustas, sistemas de autenticação seguros e integrações com serviços externos. Código limpo, performance real.",

  /* ── Contato ─────────────────────────────────────────────── */
  email:      "sandroalbjunior@gmail.com",
  github:     "https://github.com/SandroAlbertiJR",
  linkedin:   "https://www.linkedin.com/in/sandro-alb",                       // deixe vazio para ocultar

  /* ── Nav logo ────────────────────────────────────────────── */
  navLogo:    "dev.portfolio",          // texto do logo no nav (ex: "seu.nome")

  /* ── Sobre ───────────────────────────────────────────────── */
  sobreTexto: "Desenvolvedor backend com experiência em construção de APIs RESTful escaláveis, sistemas de autenticação com MFA e JWT, banco de dados relacionais e integração com serviços externos.",

  /* ── Frases digitadas no terminal do hero ────────────────── */
  terminalPhrases: [
    '> php artisan serve',
    '> backend_dev --init',
    '> git commit -m "feature: auth"',
    '> mysql -u root -p',
  ],

  /* ── Tecnologias ─────────────────────────────────────────── */
  techs: [
    { icon: '<img src="images/php.png" alt="PHP logo">',        name: "PHP",        type: "Backend · Core"    },
    { icon: '<img src="images/python.png" alt="Python logo">',    name: "Python",     type: "Backend · Scripting" },
    { icon: '<img src="images/nodejs.png" alt="Node.js logo">',   name: "Node.js",    type: "Backend · Runtime"  },
    { icon: '<img src="images/mysql.png" alt="MySQL logo">',      name: "MySQL",      type: "Banco de Dados"    },
    { icon: '<img src="images/js.png" alt="JavaScript logo">', name: "JavaScript", type: "Frontend · Utils"  },
    { icon: '<img src="images/api.png" alt="API logo">',          name: "REST APIs",  type: "Arquitetura"       },
    { icon: '<img src="images/jwt.png" alt="JWT logo">',          name: "JWT",        type: "Auth · Segurança"  },
    { icon: '<img src="images/git.png" alt="Git logo">',          name: "Git",        type: "Versionamento"     },
    { icon: '<img src="images/docker.png" alt="Docker logo">',    name: "Docker",     type: "Containers"        },
    { icon: '<img src="images/webhook.png" alt="Webhooks logo">', name: "Webhooks",   type: "Integrações"       },
  ],

  /* ── Projetos ────────────────────────────────────────────── */
  projetos: [
    {
      icon:   "🎮",
      nome:   "API de Ofertas de Jogos",
      desc:   "API REST que agrega e filtra ofertas de jogos de múltiplas plataformas em tempo real. Inclui cache inteligente, rate limiting e autenticação por API key.",
      tags:   ["PHP", "MySQL", "REST API", "Cache", "Rate Limit"],
      github: "#",
      demo:   "#",
    },
    {
      icon:   "🔐",
      nome:   "Sistema de Autenticação MFA",
      desc:   "Sistema completo de autenticação com suporte a MFA via TOTP, login social, refresh tokens rotativos e blacklist de sessões comprometidas.",
      tags:   ["PHP", "JWT", "MFA · TOTP", "MySQL", "Segurança"],
      github: "#",
      demo:   "#",
    },
    {
      icon:   "📊",
      nome:   "Dashboard com Consumo de API",
      desc:   "Painel administrativo que consome APIs externas, processa dados em background com fila de jobs e exibe métricas em tempo real com atualização via polling.",
      tags:   ["PHP", "JavaScript", "REST API", "MySQL", "Queue Jobs"],
      github: "#",
      demo:   "#",
    },
  ],

  /* ── Demonstração de API ─────────────────────────────────── */
  apiDemo: {
    titulo:   "Teste ao Vivo",
    subtitulo: "Interaja com uma API real diretamente pelo portfólio.",

    /*
      Modo de demonstração:
        "public"  → faz fetch direto de uma URL pública (sem CORS issues)
        "mock"    → simula respostas locais (útil para APIs privadas/internas)
    */
    modo: "public",    // "public" ou "mock"

    /*
      Endpoints disponíveis para o usuário testar.
      Cada objeto:
        label   → nome exibido no select
        method  → "GET" ou "POST"
        url     → URL completa (usada no modo "public")
        params  → array de campos que o usuário pode preencher
                  { name, label, placeholder, type }
                  type: "text" | "number" | "select"
                  options: array de strings (só para type "select")
        mockFn  → função(params) que retorna objeto de resposta (modo "mock")

      Exemplo com uma API pública de clima:
        url: "https://api.open-meteo.com/v1/forecast"
        params: [{ name:"latitude", label:"Latitude", placeholder:"-23.5", type:"text" }, ...]
    */
    endpoints: [
      {
        label:  "Buscar usuário (JSONPlaceholder)",
        method: "GET",
        url:    "https://jsonplaceholder.typicode.com/users/{id}",
        params: [
          { name: "id", label: "ID do usuário", placeholder: "1", type: "number" },
        ],
        mockFn: (p) => ({
          id: p.id || 1, name: "Leanne Graham", username: "Bret",
          email: "Sincere@april.biz", phone: "1-770-736-0800",
          website: "hildegard.org",
          company: { name: "Romaguera-Crona", catchPhrase: "Multi-layered client-server neural-net" }
        }),
      },
      {
        label:  "Listar posts (JSONPlaceholder)",
        method: "GET",
        url:    "https://jsonplaceholder.typicode.com/posts?userId={userId}&_limit={limit}",
        params: [
          { name: "userId", label: "User ID",        placeholder: "1",  type: "number" },
          { name: "limit",  label: "Limite de posts", placeholder: "3",  type: "number" },
        ],
        mockFn: (p) => [
          { userId: p.userId || 1, id: 1, title: "sunt aut facere repellat", body: "quia et suscipit..." },
          { userId: p.userId || 1, id: 2, title: "qui est esse", body: "est rerum tempore..." },
        ],
      },
      {
        label:  "Clima atual (Open-Meteo)",
        method: "GET",
        url:    "https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current_weather=true",
        params: [
          { name: "lat", label: "Latitude",  placeholder: "-23.55", type: "text" },
          { name: "lon", label: "Longitude", placeholder: "-46.63", type: "text" },
        ],
        mockFn: (p) => ({
          latitude: p.lat || -23.55, longitude: p.lon || -46.63,
          current_weather: { temperature: 22.4, windspeed: 12.3, weathercode: 3, time: new Date().toISOString() }
        }),
      },
    ],
  },

};