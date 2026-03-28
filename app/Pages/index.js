import Head from 'next/head'
import Header from '../components/Header'
import ProductCard from '../components/ProductCard'

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Online Store</title>
        <meta name="description" content="Best ecommerce store" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Online Store",
            }),
          }}
        />
      </Head>

      <Header />
      <main className="container">
        <h2>Products</h2>

        <div className="grid">
          {products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </main>
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch('https://fakestoreapi.com/products')
  const products = await res.json()

  return {
    props: { products },
  }
}