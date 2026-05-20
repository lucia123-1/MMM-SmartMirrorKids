Module.register("MMM-SmartMirrorKids", {

  defaults: {},

  start() {
    this.estadoSesion = null;
    this.temporizadorPaso = null;
    this.pasoAtascado = null;

    this.estado = {
      nino: null,
      actividad: null,
      paso: 0,
      tiempoPaso: 30
    };

    this.root = null;
  },

  getDom() {
    const wrapper = document.createElement("div");
    wrapper.id = "smartmirror-kids-root";
    this.root = wrapper;

    this.pantallaNinos();
    return wrapper;
  },

  limpiar() {
    if (this.root) this.root.innerHTML = "";
  },

  boton(texto, accion) {
    const b = document.createElement("button");
    b.textContent = texto;
    b.onclick = accion;
    return b;
  },

  ninos: [
    { id: 1, nombre: "CHRCA" },
    { id: 2, nombre: "AMPLI" },
    { id: 3, nombre: "MAFDI" },
    { id: 4, nombre: "SOGVI" },
    { id: 5, nombre: "PAGVI" },
    { id: 6, nombre: "OLBPR" },
    { id: 7, nombre: "JADFL" },
    { id: 8, nombre: "ADNAR" },
    { id: 9, nombre: "THHLLU" },
    { id: 10, nombre: "ISJKH" },
    { id: 11, nombre: "KIPMA" },
    { id: 12, nombre: "SAADE" },
    { id: 13, nombre: "GABGA" },
    { id: 14, nombre: "AIRGU" },
    { id: 15, nombre: "JUAMO" }
  ],

  emociones: [
    { id: "aburrido", nombre: "ABURRIDO", img: "aburrido.png" },
    { id: "alegre", nombre: "ALEGRE", img: "alegre.png" },
    { id: "asco", nombre: "ASCO", img: "asco.png" },
    { id: "cansado", nombre: "CANSADO", img: "cansado.png" },
    { id: "enamorado", nombre: "ENAMORADO", img: "enamorado.png" },
    { id: "enfadado", nombre: "ENFADADO", img: "enfadado.png" },
    { id: "miedo", nombre: "MIEDO", img: "miedo.png" },
    { id: "nervioso", nombre: "NERVIOSO", img: "nervioso.png" },
    { id: "tranquilo", nombre: "TRANQUILO", img: "tranquilo.png" },
    { id: "triste", nombre: "TRISTE", img: "triste.png" }
  ],

  actividades: [
    { id: "cara", nombre: "LAVARSE LA CARA" },
    { id: "manos", nombre: "LAVARSE LAS MANOS" },
    { id: "dientes", nombre: "LAVARSE LOS DIENTES" },
    { id: "peinarpelochico", nombre: "PEINARSE EL PELO" },
    { id: "cepillarpelochica", nombre: "CEPILLARSE EL PELO" },
    { id: "hacercoleta", nombre: "HACER UNA COLETA" },
    { id: "afeitarsemaquinilla", nombre: "AFEITARSE CON MAQUINILLA" }
  ],

  secuencias: {
    cara: [
      { nombre: "REMANGARSE", img: "remangar.png" },
      { nombre: "ABRIR EL GRIFO", img: "abrirgrifo.png" },
      { nombre: "LAVAR LA CARA", img: "lavarcara_1.png" },
      { nombre: "ECHAR JABÓN", img: "echarjabon.png" },
      { nombre: "ENJABONAR LA CARA", img: "enjabonarcara.png" },
      { nombre: "ABRIR EL GRIFO", img: "abrirgrifo.png" },
      { nombre: "ACLARAR LA CARA", img: "lavarcara_2.png" },
      { nombre: "CERRAR EL GRIFO", img: "cerrargrifo_2.png" },
      { nombre: "SECAR", img: "secar.png" },
      { nombre: "BAJAR MANGAS", img: "bajarmangas.png" },
      { nombre: "FIN", img: "fin.png" }
    ],

    manos: [
      { nombre: "ABRIR EL GRIFO", img: "abrirgrifo.png" },
      { nombre: "MOJAR MANOS", img: "mojarmanos.png" },
      { nombre: "CERRAR EL GRIFO", img: "cerrargrifo.png" },
      { nombre: "ECHAR JABÓN", img: "echarjabon.png" },
      { nombre: "ENJABONAR MANOS", img: "enjabonarmanos.png" },
      { nombre: "ABRIR EL GRIFO", img: "abrirgrifo.png" },
      { nombre: "ACLARAR MANOS", img: "lavarmanos.png" },
      { nombre: "CERRAR EL GRIFO", img: "cerrargrifo.png" },
      { nombre: "SECAR MANOS", img: "secarmanos.png" },
      { nombre: "FIN", img: "fin.png" }
    ],

    dientes: [
      { nombre: "CEPILLO", img: "cepillodientes.png" },
      { nombre: "PASTA", img: "pastadental.png" },
      { nombre: "ECHAR PASTA", img: "echarpasta.png" },
      { nombre: "MOJAR CEPILLO", img: "mojarcepillo.png" },
      { nombre: "CEPILLAR ARRIBA", img: "arriba.png" },
      { nombre: "CEPILLAR DERECHA", img: "derecha.png" },
      { nombre: "CEPILLAR IZQUIERDA", img: "izquierda.png" },
      { nombre: "CEPILLAR ABAJO", img: "abajo.png" },
      { nombre: "ABRIR EL GRIFO", img: "abrirgrifo.png" },
      { nombre: "LLENAR VASO", img: "llenovasoagua.png" },
      { nombre: "CERRAR EL GRIFO", img: "cerrargrifo.png" },
      { nombre: "ENJUAGAR", img: "enjuagar.png" },
      { nombre: "LIMPIAR CEPILLO", img: "limpiarcepillo.png" },
      { nombre: "SECAR", img: "secarmanoscara.png" },
      { nombre: "FIN", img: "fin.png" }
    ],

    peinarpelochico: [
      { nombre: "COGER PEINE", img: "cogerpeine.png" },
      { nombre: "PEINAR DELANTE ATRÁS", img: "peinardelanteatras.png" },
      { nombre: "FIN", img: "fin.png" }
    ],

    cepillarpelochica: [
      { nombre: "COGER CEPILLO", img: "cogercepillo.png" },
      { nombre: "SEPARAR PELO", img: "separarpelo.png" },
      { nombre: "CEPILLAR LADO IZQUIERDO", img: "cepilloladoizquierdo.png" },
      { nombre: "CEPILLAR LADO DERECHO", img: "cepilloladoderecho.png" },
      { nombre: "FIN", img: "fin.png" }
    ],

    hacercoleta: [
      { nombre: "COGER CEPILLO", img: "cogercepillo.png" },
      { nombre: "COGER GOMA", img: "gomapelo.png" },
      { nombre: "CEPILLAR PELO", img: "cepillarpelo.png" },
      { nombre: "RECOGER PELO", img: "recogerpelo.png" },
      { nombre: "PONER GOMA", img: "ponergoma.png" },
      { nombre: "FIN", img: "fin.png" }
    ],

    afeitarsemaquinilla: [
      { nombre: "ENCHUFAR", img: "enchufar.png" },
      { nombre: "COGER MAQUINILLA", img: "maquinaafeitar.png" },
      { nombre: "DELANTE DEL ESPEJO", img: "delanteespejo.png" },
      { nombre: "AFEITAR IZQUIERDA", img: "afeitarizquierdo.png" },
      { nombre: "AFEITAR DERECHA", img: "afeitarderecho.png" },
      { nombre: "AFEITAR BOCA", img: "afeitarboca.png" },
      { nombre: "DESENCHUFAR", img: "desenchufar.png" },
      { nombre: "GUARDAR MAQUINILLA", img: "maquinaafeitar.png" },
      { nombre: "LIMPIAR LAVABO", img: "limpiarlavabo.png" },
      { nombre: "FIN", img: "fin.png" }
    ]
  },

  pantallaNinos() {
    this.limpiar();

    const cont = document.createElement("div");
    cont.style.display = "flex";
    cont.style.alignItems = "center";
    cont.style.justifyContent = "center";
    cont.style.gap = "20px";

    const t = document.createElement("h1");
    t.textContent = "¿QUIÉN ERES?";

    const img = document.createElement("img");
    img.src = this.file("images/quieneres.png");
    img.style.width = "120px";

    cont.appendChild(t);
    cont.appendChild(img);
    this.root.appendChild(cont);

    this.ninos.forEach(n => {
      this.root.appendChild(this.boton(n.nombre, () => {
        this.estado.nino = n;
        this.estadoSesion = { 
          nino: n.nombre, 
          emocionInicio: null, 
          actividades: {} 
        };
        this.pantallaEmocionesInicio();
      }));
    });
  },

  pantallaEmocionesInicio() {
    this.limpiar();

    const cont = document.createElement("div");
    cont.style.display = "flex";
    cont.style.alignItems = "center";
    cont.style.justifyContent = "center";
    cont.style.gap = "20px";

    const t = document.createElement("h1");
    t.textContent = "¿CÓMO TE SIENTES HOY?";

    const img = document.createElement("img");
    img.src = this.file("images/comosientes.png");
    img.style.width = "120px";

    cont.appendChild(t);
    cont.appendChild(img);
    this.root.appendChild(cont);

    const grid = document.createElement("div");
    grid.className = "emociones-grid";
    this.root.appendChild(grid);

    this.emociones.forEach(e => {
      const item = document.createElement("div");
      item.className = "emocion-item";

      const im = document.createElement("img");
      im.src = this.file("images/" + e.img);

      const b = this.boton(e.nombre, () => {
        this.estadoSesion.emocionInicio = e.nombre;
        this.pantallaActividades();
      });

      item.appendChild(im);
      item.appendChild(b);
      grid.appendChild(item);
    });
  },

  pantallaActividades() {
    this.limpiar();

    const cont = document.createElement("div");
    cont.style.display = "flex";
    cont.style.alignItems = "center";
    cont.style.justifyContent = "center";
    cont.style.gap = "20px";

    const t = document.createElement("h1");
    t.textContent = "¿QUÉ QUIERES HACER?";

    const img = document.createElement("img");
    img.src = this.file("images/quequieres.png");
    img.style.width = "120px";

    cont.appendChild(t);
    cont.appendChild(img);
    this.root.appendChild(cont);

    const grid = document.createElement("div");
    grid.style.display = "grid";
    grid.style.gridTemplateColumns = "repeat(auto-fit, minmax(200px, 1fr))";
    grid.style.gap = "30px";
    grid.style.marginTop = "40px";
    grid.style.width = "100%";
    grid.style.justifyItems = "center";
    this.root.appendChild(grid);

    const pictos = {
      cara: "iniciolavarcara.png",
      manos: "iniciolavarmanos.png",
      dientes: "iniciolavardientes.png",
      peinarpelochico: "iniciopeinar.png",
      cepillarpelochica: "iniciocepillar.png",
      hacercoleta: "iniciocoleta.png",
      afeitarsemaquinilla: "afeitarsemaquinilla (3).png"
    };

    this.actividades.forEach(a => {
      const bloque = document.createElement("div");
      bloque.style.display = "flex";
      bloque.style.flexDirection = "column";
      bloque.style.alignItems = "center";

      const imgAct = document.createElement("img");
      imgAct.src = this.file("images/" + pictos[a.id]);
      imgAct.style.width = "140px";
      imgAct.style.height = "140px";
      imgAct.style.objectFit = "contain";
      imgAct.style.cursor = "pointer";
      imgAct.style.marginBottom = "10px";

      imgAct.onclick = () => {
        this.estado.actividad = a;
        this.estado.paso = 0;

        this.estadoSesion.actividades[a.id] = { 
          ayudas: [], 
          emocionFinal: null,
          focusActivado: 0
        };

        this.pantallaPreviewActividad();
      };

      bloque.appendChild(imgAct);

      const b = this.boton(a.nombre, () => {
        this.estado.actividad = a;
        this.estado.paso = 0;

        this.estadoSesion.actividades[a.id] = { 
          ayudas: [], 
          emocionFinal: null,
          focusActivado: 0
        };

        this.pantallaPreviewActividad();
      });

      bloque.appendChild(b);
      grid.appendChild(bloque);
    });

    this.root.appendChild(this.boton("SALIR", () => this.pantallaFinSesion()));
  },

  pantallaPreviewActividad() {
    this.limpiar();

    const titulo = document.createElement("h1");
    titulo.textContent = this.estado.actividad.nombre;
    this.root.appendChild(titulo);

    const fila = document.createElement("div");
    fila.className = "preview-fila";

    this.secuencias[this.estado.actividad.id].forEach(p => {
      const im = document.createElement("img");
      im.src = this.file("images/" + p.img);
      fila.appendChild(im);
    });

    this.root.appendChild(fila);

    const tiempos = [15, 30, 45, 60];

    const tituloTiempo = document.createElement("h2");
    tituloTiempo.textContent = "ELIGE TIEMPO POR PASO";
    this.root.appendChild(tituloTiempo);

    const contTiempo = document.createElement("div");
    contTiempo.style.display = "flex";
    contTiempo.style.gap = "20px";
    contTiempo.style.marginTop = "30px";
    contTiempo.style.justifyContent = "center";

    tiempos.forEach(t => {
      const b = this.boton(t + "s", () => {
        this.estado.tiempoPaso = t;
        alert("Tiempo seleccionado: " + t + " segundos");
      });
      contTiempo.appendChild(b);
    });

    this.root.appendChild(contTiempo);

    const contPlay = document.createElement("div");
    contPlay.style.display = "flex";
    contPlay.style.alignItems = "center";
    contPlay.style.justifyContent = "center";
    contPlay.style.gap = "15px";

    const btn = this.boton("INICIAR ACTIVIDAD", () => this.pantallaSecuencia());

    const imgPlay = document.createElement("img");
    imgPlay.src = this.file("images/play.png");
    imgPlay.style.width = "60px";

    contPlay.appendChild(btn);
    contPlay.appendChild(imgPlay);

    this.root.appendChild(contPlay);
  },

  pantallaSecuencia() {
    this.limpiar();
    if (this.temporizadorPaso) clearTimeout(this.temporizadorPaso);

    this.temporizadorPaso = setTimeout(() => {
      this.pasoAtascado = this.estado.paso;
      this.estadoSesion.actividades[this.estado.actividad.id].focusActivado++;
      this.pantallaFocus();
    }, this.estado.tiempoPaso * 1000);

    const contInicio = document.createElement("div");
    contInicio.style.display = "flex";
    contInicio.style.alignItems = "center";
    contInicio.style.justifyContent = "flex-start";
    contInicio.style.gap = "15px";
    contInicio.style.marginLeft = "20px";

    const imgVolver = document.createElement("img");
    imgVolver.src = this.file("images/volver.png");
    imgVolver.style.width = "60px";

    const btnInicio = this.boton("INICIO", () => {
      this.estado = { nino: null, actividad: null, paso: 0 };
      this.estadoSesion = null;
      this.pantallaNinos();
    });

    contInicio.appendChild(btnInicio);
    contInicio.appendChild(imgVolver);
    this.root.appendChild(contInicio);

    const pasos = this.secuencias[this.estado.actividad.id];

    const btnSiguiente = document.createElement("button");
    btnSiguiente.textContent = "SIGUIENTE";
    btnSiguiente.className = "boton-siguiente";
    btnSiguiente.onclick = () => {
      if (this.temporizadorPaso) clearTimeout(this.temporizadorPaso);
      this.estado.paso++;
      if (this.estado.paso < pasos.length) {
        this.pantallaSecuencia();
      } else {
        this.pantallaEmocionesFinalActividad();
      }
    };

    this.root.appendChild(btnSiguiente);

    const pasoActual = pasos[this.estado.paso];
    const barra = document.createElement("div");
    barra.className = "barra-pasos";
    this.root.appendChild(barra);

    pasos.forEach((p, i) => {
      const contMini = document.createElement("div");
      contMini.className = "paso-mini-con-numero";

      const mini = document.createElement("img");
      mini.src = this.file("images/" + p.img);
      mini.className = "paso-mini";
      if (i === this.estado.paso) mini.classList.add("paso-actual");

      const num = document.createElement("span");
      num.className = "numero-mini";
      num.textContent = `${i + 1}/${pasos.length}`;

      contMini.appendChild(mini);
      contMini.appendChild(num);
      barra.appendChild(contMini);
    });

    const layout = document.createElement("div");
    layout.className = "layout-secuencia";
    this.root.appendChild(layout);

    const izq = document.createElement("div");
    izq.className = "lado-izquierdo";

    const img = document.createElement("img");
    img.src = this.file("images/" + pasoActual.img);
    img.className = "img-grande";

    izq.appendChild(img);

    const botones = document.createElement("div");
    botones.className = "botones-secuencia";

    const btnHecho = this.boton("HECHO", () => {
      if (this.temporizadorPaso) clearTimeout(this.temporizadorPaso);

      this.estado.paso++;
      if (this.estado.paso < pasos.length) {
        this.pantallaSecuencia();
      } else {
        this.pantallaEmocionesFinalActividad();
      }
    });

    botones.appendChild(btnHecho);

    const contAyuda = document.createElement("div");
    contAyuda.style.display = "flex";
    contAyuda.style.alignItems = "center";
    contAyuda.style.gap = "10px";

    const btnAyuda = this.boton("AYUDA", () => {
      this.estadoSesion.actividades[this.estado.actividad.id].ayudas.push({
        paso: this.estado.paso + 1
      });
      alert("PIDE AYUDA A UN ADULTO");
    });

    const imgAyuda = document.createElement("img");
    imgAyuda.src = this.file("images/ayuda.png");
    imgAyuda.style.width = "50px";

    contAyuda.appendChild(btnAyuda);
    contAyuda.appendChild(imgAyuda);

    botones.appendChild(contAyuda);

    izq.appendChild(botones);
    layout.appendChild(izq);

    const der = document.createElement("div");
    der.className = "lado-derecho";

    const t = document.createElement("h2");
    t.textContent = `${pasoActual.nombre} (${this.estado.paso + 1}/${pasos.length})`;

    der.appendChild(t);
    layout.appendChild(der);
  },


  pantallaEmocionesFinalActividad() {
    this.limpiar();

    const t = document.createElement("h1");
    t.textContent = "¿CÓMO TE SIENTES AHORA?";
    this.root.appendChild(t);

    const grid = document.createElement("div");
    grid.className = "emociones-grid";
    this.root.appendChild(grid);

    this.emociones.forEach(e => {
      const item = document.createElement("div");
      item.className = "emocion-item";

      const im = document.createElement("img");
      im.src = this.file("images/" + e.img);

      const b = this.boton(e.nombre, () => {
        this.estadoSesion.actividades[this.estado.actividad.id].emocionFinal = e.nombre;
        this.pantallaActividades();
      });

      item.appendChild(im);
      item.appendChild(b);
      grid.appendChild(item);
    });
  },

  pantallaFinSesion() {
    this.limpiar();

    const t = document.createElement("h1");
    t.textContent = "¡HASTA PRONTO!";
    this.root.appendChild(t);

    const img = document.createElement("img");
    img.src = this.file("images/fin.png");
    img.style.width = "200px";
    this.root.appendChild(img);

    this.root.appendChild(this.boton("VER DATOS", () => this.pantallaVerDatos()));
    this.root.appendChild(this.boton("INICIO", () => this.pantallaNinos()));
  },


  pantallaVerDatos() {
    this.limpiar();

    const cont = document.createElement("div");
    cont.style.display = "flex";
    cont.style.alignItems = "center";
    cont.style.justifyContent = "center";
    cont.style.gap = "20px";

    const t = document.createElement("h1");
    t.textContent = "DATOS DE LA SESIÓN";

    const img = document.createElement("img");
    img.src = this.file("images/datos.png");
    img.style.width = "120px";

    cont.appendChild(t);
    cont.appendChild(img);
    this.root.appendChild(cont);

    const datos = document.createElement("div");
    datos.style.textAlign = "left";
    datos.style.margin = "0 auto";
    datos.style.maxWidth = "600px";
    datos.style.fontSize = "22px";

    datos.innerHTML += `<p><strong>Niño:</strong> ${this.estadoSesion.nino}</p>`;
    datos.innerHTML += `<p><strong>Emoción inicial:</strong> ${this.estadoSesion.emocionInicio}</p>`;
    datos.innerHTML += `<h2>Actividades:</h2>`;

    for (const actId in this.estadoSesion.actividades) {
      const act = this.estadoSesion.actividades[actId];
      const nombre = this.actividades.find(a => a.id === actId).nombre;

      datos.innerHTML += `<p><strong>${nombre}</strong></p>`;
      datos.innerHTML += `<p>Emoción final: ${act.emocionFinal || "No registrada"}</p>`;

      if (act.ayudas.length === 0) {
        datos.innerHTML += `<p>Ayudas: Ninguna</p>`;
      } else {
        datos.innerHTML += `<p>Ayudas en pasos: ${act.ayudas.map(a => a.paso).join(", ")}</p>`;
      }

      datos.innerHTML += `<hr>`;
    }

    this.root.appendChild(datos);

    this.root.appendChild(this.boton("INICIO", () => this.pantallaNinos()));
  },

  
  pantallaFocus() {
    this.limpiar();
    this.root.style.background = "black";

    const pasos = this.secuencias[this.estado.actividad.id];

    const barra = document.createElement("div");
    barra.className = "barra-pasos";
    this.root.appendChild(barra);

    pasos.forEach((p, i) => {
      const contMini = document.createElement("div");
      contMini.className = "paso-mini-con-numero";

      const mini = document.createElement("img");
      mini.src = this.file("images/" + p.img);
      mini.className = "paso-mini";

      if (i === this.pasoAtascado) {
        mini.style.border = "4px solid yellow";
        mini.style.opacity = "1";
      }

      const num = document.createElement("span");
      num.className = "numero-mini";
      num.textContent = `${i + 1}/${pasos.length}`;

      contMini.appendChild(mini);
      contMini.appendChild(num);
      barra.appendChild(contMini);
    });

    const burbuja = document.createElement("div");
    burbuja.className = "burbuja-real";
    this.root.appendChild(burbuja);

    setTimeout(() => {
      let centerX = window.innerWidth / 2;
      let centerY = window.innerHeight / 2;

      burbuja.style.left = centerX + "px";
      burbuja.style.top = centerY + "px";

      let t = 0;
      let animando = true;

      const moverBurbujaReal = () => {
        if (!animando) return;

        t += 0.02;
        const circleX = Math.cos(t * 1.2) * 80;
        const circleY = Math.sin(t * 1.2) * 80;
        const floatY = Math.sin(t * 3) * 20;
        const rot = Math.sin(t * 1.5) * 25;

        const x = centerX + circleX;
        const y = centerY + circleY + floatY;

        burbuja.style.left = x + "px";
        burbuja.style.top = y + "px";
        burbuja.style.transform = `rotate(${rot}deg)`;

        requestAnimationFrame(moverBurbujaReal);
      };

      moverBurbujaReal();

      setTimeout(() => {
        animando = false;

        const miniPasos = this.root.querySelectorAll(".paso-mini");
        const objetivo = miniPasos[this.pasoAtascado];

        if (objetivo) {
          const rect = objetivo.getBoundingClientRect();
          const x = rect.left + rect.width / 2;
          const y = rect.top + rect.height / 2;

          burbuja.style.transition = "all 2s ease-in-out";
          burbuja.style.left = x + "px";
          burbuja.style.top = y + "px";
        }
      }, 7000);

      setTimeout(() => {
        this.pantallaSecuencia();
      }, 9000);

    }, 50);
  },
 
  getStyles() {
    return ["MMM-SmartMirrorKids.css"];
  }

});
