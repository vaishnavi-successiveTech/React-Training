import Weather from "@/components/Weather";
export default function HomePage() {
  return (
    <div>
    <Weather temperature={30}/>
    <Weather temperature={9}/>
    </div>
  )
}
