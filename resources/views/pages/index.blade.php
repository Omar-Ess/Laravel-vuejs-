@extends('layouts.app')


@section('content')
    @include('includes.hero' , ['header' , $header])
    <main id="main">

        <!-- ======= Featured Services Section ======= -->
        <section id="featured-services" class="featured-services">


            <div class="section-title">
                <h2>Collections</h2>
                <h3>Consultez notre <span>Collections</span></h3>
                <p>{{ config('app.name', 'Tapis') }}: concepteur de tapis et moquettes de luxe et traditionnels.</p>
            </div>
            <div class="container" data-aos="fade-up">

                <div class="row">
                    <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
                            <div class="icon"><i class="bx bxl-dribbble"></i></div>
                            <h4 class="title">Articles traditionnels</h4>
                            <p class="description">Avec nos articles tradionnels. vous pouvez sentir l'héritage de notre
                                nation</p>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
                            <div class="icon"><i class="bx bx-diamond"></i></div>
                            <h4 class="title">Luxe Et Moderne</h4>
                            <p class="description">Nous couvrons l'ensemble du marché mondial dans tous les secteurs du
                                luxe: commerce de détail, plaisance, aviation, hôtellerie, résidentiel.</p>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div class="icon-box" data-aos="fade-up" data-aos-delay="300">
                            <div class="icon"><i class="bx bx-tachometer"></i></div>
                            <h4 class="title">Meilleure soie</h4>
                            <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                            </p>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div class="icon-box" data-aos="fade-up" data-aos-delay="400">
                            <div class="icon"><i class="bx bx-world"></i></div>
                            <h4 class="title">Fabriqué en Turquie</h4>
                            <p class="description">Tapis et moquettes qui revendiquent toute l'élégance du design unique
                                Made In Turquie avec une inclination internationale.</p>
                        </div>
                    </div>

                </div>

            </div>
        </section><!-- End Featured Services Section -->

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
            <h3>Notre  <span>Équipe</span></h3>
            <p>les gens qui ont fait prospérer cette entreprise</p>
        </div>
        <section id="testimonials" class="testimonials">

            <div class="container" data-aos="zoom-in">

                <div class="owl-carousel testimonials-carousel">

                    <div class="testimonial-item">
                        <img src="/storage/images/design/team/team-1.jpg" class="testimonial-img" alt="">
                        <h3>Omar Madih</h3>
                        <h4>Patron</h4>
                        <p>
                            <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                            Je dirige cette entreprise depuis 10 ans et je suis ravi de garder l'héritage de mon père
                            <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                        </p>
                    </div>

                </div>

            </div>
        </section><!-- End Testimonials Section -->

        <!-- ======= Portfolio Section ======= -->
        <section id="portfolio" class="portfolio">
            <div class="container" data-aos="fade-up">

                <div class="section-title">
                    <h2>Galerie</h2>
                    <h3>Nos derniers <span>Produits</span></h3>
                    <p>Produits en vedette et les plus vendus.</p>
                </div>

                <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
   @foreach ($latestProducts as $product)

                    <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                        <img src="{{$product->image}}" class="img-fluid" alt="">
                        <div class="portfolio-info">
                            <h4>{{ Str::limit($product->title, 25, $end='...')}}</h4>
                            <a href="{{$product->image}}" data-gall="portfolioGallery"
                                class="venobox preview-link" title="{{$product->title}}"><i class="fa fa-search-plus"></i></a>

                        </div>
                    </div>
                    @endforeach
  <a href="{{route('gallery.index')}}" class="btn btn-warning btn-block" style="background-color: #f96302;color: #ffff;">Voir plus</a>
                </div>

            </div>
        </section><!-- End Portfolio Section -->



        <!-- ======= Frequently Asked Questions Section ======= -->
        <section id="faq" class="faq section-bg">
            <div class="container" data-aos="fade-up">

                <div class="section-title">
                    <h2>F.A.Q</h2>
                    <h3>Questions fréquemment <span>Posées</span></h3>
                    <p>Si c'est la première fois que vous achetez un tapis.tu aurais pu poser ces questions ..</p>
                </div>

                <ul class="faq-list" data-aos="fade-up" data-aos-delay="100">

                    <li>
                        <a data-toggle="collapse" class="" href="#faq1">De quoi sont faits les tapis ?
                            <i class="fa fa-caret-down"></i></a>
                        <div id="faq1" class="collapse show" data-parent=".faq-list">
                            <p>
                                Les tapis est fait de fibres de nylon, de polyester, d'oléfine ou de laine tissées. Pour
                                assurer un tapis durable et de qualité, envisagez un nombre de torsions plus élevé des
                                fibres et un volume de densité plus élevé des touffes. Chacune de ces fibres offre des
                                avantages individuels.
                            </p>
                        </div>
                    </li>

                    <li>
                        <a data-toggle="collapse" href="#faq2" class="collapsed">Quelles chambres devraient avoir de la
                            moquette ? <i class="fa fa-caret-down"></i></a>
                        <div id="faq2" class="collapse" data-parent=".faq-list">
                            <p>
                                Chambre à coucher. Alors que certaines personnes préfèrent le bois franc dans leurs
                                chambres, la moquette est un autre premier choix. ...
                                Salon. Les salons sont souvent des endroits très fréquentés où la famille et les amis se
                                réunissent pour visiter, regarder des films ou rire. ...
                                Salle de jeux. ...
                                Escaliers.
                            </p>
                        </div>
                    </li>

                    <li>
                        <a data-toggle="collapse" href="#faq3" class="collapsed">Comment choisir un tapis pour ma maison ?
                            <i class="fa fa-caret-down"></i></a>
                        <div id="faq3" class="collapse" data-parent=".faq-list">
                            <p>
                                La densité est déterminée par l'épaisseur des fibres et leur degré de tassement. Plus ils
                                sont épais et lourds, meilleure est la qualité du tapis et moins sensible à l'écrasement.
                                Pliez l'échantillon de tapis vers l'arrière (photo). Si vous pouvez voir facilement le
                                support, c'est un tapis de faible densité (qualité inférieure).
                            </p>
                        </div>
                    </li>

                    <li>
                        <a data-toggle="collapse" href="#faq4" class="collapsed">Devriez-vous mettre de la moquette dans les chambres ? <i
                                class="fa fa-caret-down"></i></a>
                        <div id="faq4" class="collapse" data-parent=".faq-list">
                            <p>
                                Le tapis est généralement le meilleur choix pour les chambres et les chambres principales car il est doux et
                                confortable. Il est chaud et peut réduire le son, par rapport au bois dur, ce qui aide le son à résonner et fait
                                les chambres sont froides.
                            </p>
                        </div>
                    </li>


                </ul>

            </div>
        </section><!-- End Frequently Asked Questions Section -->

        <!-- ======= Contact Section ======= -->
        @include('includes.contact-section')
        <!-- End Contact Section -->

    </main><!-- End #main -->
@endsection
