import React from 'react';
import Header from './components/Header';
import MyCard from './components/MyCard';
import Footer from './components/Footer';


const App = () => {
  return (
    <div>
      <Header title="Adopta un perrito" />
      <div className="card-container">
        <MyCard 
          imageUrl="https://media.istockphoto.com/id/1680448692/es/foto/feliz-jadeo-gal%C3%A9s-corgi-pembroke-puppy-sentado-aislado-sobre-blanco.jpg?s=2048x2048&w=is&k=20&c=cNKiCnfP6tgQnHIyUxVou0jS6hDN3qeXxwlah_du7M8=" 
          name="Bobby" 
          description="Lleno de energía y listo para jugar. Aún es un cachorro y es muy adorable ¡Dale a Bobby el hogar amoroso que se merece" 
          tagText="Corgi" 
          tagColor="primary"/>
        <MyCard 
          imageUrl="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          name="Thor" 
          description="Es juguetón, amigable y se lleva bien con los niños y otros animales. ¡Haz de Thor parte de tu familia hoy mismo!" 
          tagText="Pug" 
          tagColor="secondary" />
        <MyCard 
          imageUrl="https://images.pexels.com/photos/5958288/pexels-photo-5958288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          name="Pulguitas" 
          description="Un perro de tamaño mediano con un corazón gigante. Hazte amigo de Pulguitas y experimenta un amor incondicional" 
          tagText="Multiraza" 
          tagColor="success"/>
        <MyCard 
          imageUrl="https://images.pexels.com/photos/5108127/pexels-photo-5108127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          name="Polo" 
          description="Es un compañero leal y cariñoso que adora los mimos y abrazos. Ayuda a Polo a encontrar su final feliz"
          tagText="Golden" 
          tagColor="warning"/>
      </div>
      <Footer />
    </div>
  );
}

export default App;


