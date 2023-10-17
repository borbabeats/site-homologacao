import CarouselComponent from "./Carousel/Carousel";
import ContainerHistory from './Containers/ContainerHistory';
import ContainersItems from './Containers/ContainerItems';
import ContainerNews from './Containers/ContainerNews';

export default function HomePage() {
    return <>
        <CarouselComponent />
        <ContainerHistory />
        <ContainersItems />
        <ContainerNews />
    </>
}