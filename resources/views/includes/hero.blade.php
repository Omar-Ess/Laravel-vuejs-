    <!-- ======= Hero Section ======= -->
    <section id="hero" class="d-flex align-items-center">
        <div class="container" data-aos="zoom-out" data-aos-delay="100">
            <h1 class="text-light">Bienvenue sur <span>{{ config('app.name', 'Tapis') }}</spa>
            </h1>
            <h2 class="text-light">{{$header->content}}</h2>
            <div class="d-flex">
                <a href="{{ route('gallery.index') }}" class="btn-get-started scrollto">Notre Produits</a>
                <a href="{{ route('contact.index') }}" class=" btn-watch-video "> Nous contacter <i
                        class="icofont-play-alt-2"></i></a>
            </div>

        </div>
    </section><!-- End Hero -->
