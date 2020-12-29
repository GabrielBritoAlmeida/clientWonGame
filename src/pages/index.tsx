import Home from 'templates/Home'

export default function Index(props: any) {
  return <Home />
}

export function getStaticProps() {
  return {
    props: {
      heading: 'Olha'
    }
  }
}
