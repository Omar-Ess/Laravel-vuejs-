@extends('layouts.app')
@section('title')
 | About
@endsection
@section('content')
    @include('includes.breadcrumb' , ['page'=>'propos'])
        <!-- ======= About Section ======= -->
        @include('includes.about-section')       <!-- End About Section -->


    <!-- ======= Featured Services Section ======= -->
    <section id="featured-services" class="featured-services section-bg">


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
@endsection
