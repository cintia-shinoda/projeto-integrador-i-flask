

function App() {
  return (
    <>
      <header className="flex justify-between p-4">
        <img src="src/assets/logo.png" alt="logo do sitio agar" />
        
      </header>

      <main className="flex flex-col items-center text-slate-100 gap-2 bg-[url('src/assets/background-group.jpg')] bg-cover justify-between md:h-screen">
        <h2 className="text-4xl p-4 text-black font-bold pt-20 md:pt-32">OS <span className="text-yellow-400 text-8xl">300</span></h2>

        <div className="w-3/5 pb-4">
          <p className="text-2xl">Faça parte desta legião de amigos em prol do Sítio Agar!</p>
          
          <p className="text-base">Torne-se um sócio-colaborador e ajude-nos a fazer a diferença na vida de crianças, adolescentes e idosos.</p>
        </div>

      </main>

      <section className="bg-yellow-500 text-white">
        <form className="flex flex-col gap-5 items-center p-24">
          <h3 className="text-2xl">Entre em contato e seja um sócio-colaborador:</h3>
          
          <input type="text" name="name"  placeholder="Seu nome" className="w-full md:w-2/5 p-2"/>
          <input type="email" name="email" placeholder="Seu e-mail" className="w-full md:w-2/5 p-2"/>
          <input type="text" name="state-city"  placeholder="Cidade/Estado" className="w-full md:w-2/5 p-2"/>
          <input type="tel" name="phonenumber" placeholder="DDD + WhatsApp" className="w-full md:w-2/5 p-2"/>

          <button className="uppercase text-yellow-500 bg-black p-2 hover:bg-slate-900 transition-all">Mais informações</button>
      </form>
      </section>

      <section className="flex flex-col gap-5 items-center p-24">
        <h3 className="text-2xl text-yellow-400">30 anos de solidariedade</h3>

        <p>Somos uma instituição sem fins lucrativas de proteção à infância, adolescência e terceira idade, que nasceu como abrigo de crianças portadoras do vírus HIV.</p>
      </section>
      
      <footer>

      </footer>
      
    </>
  )
}

export default App
