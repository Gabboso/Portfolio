export default function Page() {
  return (
    <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 ">
      
      {/* WELCOME */}
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 ">
          Benvenuto
        </h1>

        <p className="mt-4 text-lg text-gray-600 max-w-2xl">
          Sono uno sviluppatore web appassionato di tecnologia e design.
          Creo applicazioni moderne con Next.js, React e Tailwind CSS,
          curando performance, esperienza utente e pulizia del codice.
        </p>
      </div>

      {/* CARDS */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
          <h2 className="text-xl font-semibold">Progetti</h2>
          <p className="mt-2 text-gray-600">
            Qui trovi i miei lavori più recenti.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
          <h2 className="text-xl font-semibold">Competenze</h2>
          <p className="mt-2 text-gray-600">
            React, Next.js, Tailwind e backend.
          </p>
        </div>

      </div>
    </div>
  );
}