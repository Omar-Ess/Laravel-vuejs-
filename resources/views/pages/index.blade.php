@extends('layouts.app')


@section('content')
    @include('includes.hero' , ['header' , $header])
    <main id="main">

        <!-- ======= Featured Services Section ======= -->
        @include('includes.services-section')
        <!-- End Featured Services Section -->

        <!-- ======= About Section ======= -->
        @include('includes.about-section')
        <!-- End About Section -->



        <!-- ======= Counts Section ======= -->
        <section id="counts" class="counts">
            <div class="container" data-aos="fade-up">

                <div class="row">

                    <div class="col-lg-3 col-md-6">
                        <div class="count-box">
                            <i class="icofont-simple-smile"></i>
                            <span data-toggle="counter-up">232</span>
                            <p>Clients satisfaits</p>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 mt-5 mt-md-0">
                        <div class="count-box">
                            <i class="icofont-document-folder"></i>
                            <span data-toggle="counter-up">521</span>
                            <p>Produits vendus annuellement</p>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
                        <div class="count-box">
                            <i class="icofont-live-support"></i>
                            <span data-toggle="counter-up">3</span>
                            <p>Magasins</p>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
                        <div class="count-box">
                            <i class="icofont-users-alt-5"></i>
                            <span data-toggle="counter-up">15</span>
                            <p>Travailleurs acharnés</p>
                        </div>
                    </div>

                </div>

            </div>
        </section><!-- End Counts Section -->




        <!-- ======= Teams Section  ======= -->
        <div class="section-title">
            <h2>Équipe</h2>
            <h3>Notre <span>Équipe</span></h3>
            <p>les gens qui ont fait prospérer cette entreprise</p>
        </div>
        <section id="testimonials" class="testimonials">

            <div class="container" data-aos="zoom-in">

                <div class="owl-carousel testimonials-carousel">

                    <div class="testimonial-item">
                        <a class="venobox" href="/storage/images/design/team/team-1.jpg"><img
                                src="/storage/images/design/team/team-1-sm.jpg" class="testimonial-img" alt="">
                            <h3>Hassan Gouhmadi</h3>
                        </a>
                        <h4>Patron</h4>
                        <p>
                            <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                            Je dirige cette entreprise depuis 20 ans et je suis ravi de garder l'héritage de mon père
                            <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                        </p>
                    </div>

                </div>

            </div>
        </section><!-- End Testimonials Section -->

        <!-- ======= Portfolio Section ======= -->
        <section id="portfolio" class="portfolio section-bg">
            <div class="container" data-aos="fade-up">

                <div class="section-title">
                    <h2>Galerie</h2>
                    <h3>Nos derniers <span>Produits</span></h3>
                    <p>Produits en vedette et les plus vendus.</p>
                </div>

                <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
                    @foreach ($latestProducts as $product)

                        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                            <img src="{{ $product->image }}" class="img-fluid" alt="">
                            <div class="portfolio-info">
                                <h4>{{ Str::limit($product->title, 25, $end = '...') }}</h4>
                                <a href="{{ $product->image }}" data-gall="portfolioGallery" class="venobox preview-link"
                                    title="{{ $product->title }}"><i class="fa fa-search-plus"></i></a>

                            </div>
                        </div>
                    @endforeach
                    <a href="{{ route('gallery.index') }}" class="btn btn-warning btn-block"
                        style="background-color: #e72323;color: #ffff;">Voir plus</a>
                </div>

            </div>
        </section><!-- End Portfolio Section -->



        <!-- ======= Contact Section ======= -->
        @include('includes.contact-section')
        <!-- End Contact Section -->

    </main><!-- End #main -->
@endsection
