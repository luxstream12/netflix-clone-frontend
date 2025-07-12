import React, { useState, useEffect } from 'react'; // Esta é a primeira linha e é essencial.

// Dados de exemplo para filmes e séries
const mockMovies = [
  {
    id: 1,
    title: 'Filme de Ação Incrível',
    genre: 'Ação',
    imageUrl: 'https://placehold.co/300x170/000000/FFFFFF?text=Ação+1',
  },
  {
    id: 2,
    title: 'Comédia Romântica',
    genre: 'Comédia',
    imageUrl: 'https://placehold.co/300x170/000000/FFFFFF?text=Comédia+1',
  },
  {
    id: 3,
    title: 'Drama Intenso',
    genre: 'Drama',
    imageUrl: 'https://placehold.co/300x170/000000/FFFFFF?text=Drama+1',
  },
  {
    id: 4,
    title: 'Ficção Científica Épica',
    genre: 'Ficção Científica',
    imageUrl: 'https://placehold.co/300x170/000000/FFFFFF?text=Sci-Fi+1',
  },
  {
    id: 5,
    title: 'Documentário Fascinante',
    genre: 'Documentário',
    imageUrl: 'https://placehold.co/300x170/000000/FFFFFF?text=Doc+1',
  },
  {
    id: 6,
    title: 'Ação 2',
    genre: 'Ação',
    imageUrl: 'https://placehold.co/300x170/000000/FFFFFF?text=Ação+2',
  },
  {
    id: 7,
    title: 'Comédia 2',
    genre: 'Comédia',
    imageUrl: 'https://placehold.co/300x170/000000/FFFFFF?text=Comédia+2',
  },
  {
    id: 8,
    title: 'Drama 2',
    genre: 'Drama',
    imageUrl: 'https://placehold.co/300x170/000000/FFFFFF?text=Drama+2',
  },
  {
    id: 9,
    title: 'Ficção Científica 2',
    genre: 'Ficção Científica',
    imageUrl: 'https://placehold.co/300x170/000000/FFFFFF?text=Sci-Fi+2',
  },
  {
    id: 10,
    title: 'Documentário 2',
    genre: 'Documentário',
    imageUrl: 'https://placehold.co/300x170/000000/FFFFFF?text=Doc+2',
  },
];

// Componente do cabeçalho (Navbar)
const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black to-transparent p-4 flex justify-between items-center">
      {/* Logotipo Netflix */}
      <div className="text-red-600 text-4xl font-bold">
        <span className="font-['Inter']">NETFLIX</span>
      </div>
      {/* Navegação (opcional, pode ser adicionada mais tarde) */}
      <nav className="hidden md:block">
        <ul className="flex space-x-6 text-white text-lg">
          <li>Início</li>
          <li>Séries</li>
          <li>Filmes</li>
          <li>Minha Lista</li>
        </ul>
      </nav>
    </header>
  );
};

// Componente da seção principal (Hero Section)
const HeroSection = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage: `url('https://placehold.co/1920x1080/000000/FFFFFF?text=Filme+Destaque')`,
      }}
    >
      {/* Overlay escuro para melhor contraste do texto */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 text-center max-w-3xl p-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 rounded-lg">Título do Filme Destaque</h1>
        <p className="text-lg md:text-xl mb-8 rounded-lg">
          Uma breve descrição do filme em destaque. Prepare-se para uma aventura emocionante,
          cheia de reviravoltas e personagens inesquecíveis.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-300 transition duration-300 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
            Reproduzir
          </button>
          <button className="bg-gray-700 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-600 transition duration-300 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Minha Lista
          </button>
        </div>
      </div>
    </div>
  );
};

// Componente para uma linha de filmes
const MovieRow = ({ title, movies }) => {
  return (
    <div className="mb-8 p-4">
      <h2 className="text-3xl font-bold text-white mb-4 rounded-lg">{title}</h2>
      <div className="flex overflow-x-scroll scrollbar-hide space-x-4 pb-4">
        {movies.map((movie) => (
          <div key={movie.id} className="flex-none w-48 cursor-pointer transform hover:scale-105 transition duration-300 rounded-lg overflow-hidden shadow-lg">
            <img
              src={movie.imageUrl}
              alt={movie.title}
              className="w-full h-auto object-cover rounded-lg"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://placehold.co/300x170/000000/FFFFFF?text=Erro+Imagem`;
              }}
            />
            <div className="p-2 bg-gray-800 text-white rounded-b-lg">
              <h3 className="text-md font-semibold truncate">{movie.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Componente principal da aplicação
export default function App() {
  // Filtrar filmes por gênero para criar diferentes linhas
  const actionMovies = mockMovies.filter((movie) => movie.genre === 'Ação');
  const comedyMovies = mockMovies.filter((movie) => movie.genre === 'Comédia');
  const dramaMovies = mockMovies.filter((movie) => movie.genre === 'Drama');

  return (
    <div className="min-h-screen bg-black font-sans">
      {/* Carrega o Tailwind CSS */}
      <script src="https://cdn.tailwindcss.com"></script>
      <Header />
      <HeroSection />
      <main className="relative z-10 -mt-20"> {/* Ajuste para sobrepor um pouco o HeroSection */}
        <MovieRow title="Filmes de Ação" movies={actionMovies} />
        <MovieRow title="Comédias Populares" movies={comedyMovies} />
        <MovieRow title="Dramas Emocionantes" movies={dramaMovies} />
        <MovieRow title="Continuar Assistindo" movies={mockMovies.slice(0, 5)} /> {/* Exemplo de outra linha */}
      </main>

      {/* Estilos para esconder a barra de rolagem, mas permitir a rolagem */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE e Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </div>
  );
}
