 <!-- ======= About Section ======= -->
 <section id="about" class="about {{request()->is('/') ? 'section-bg' : ''}}">
    <div class="container" data-aos="fade-up">

        <div class="section-title">
            <h2>Propos</h2>
            <h3>Apprenez à <span>Nous Connaître</span></h3>
            <p>"What Seperates a good product from a great product is a willingness to take risk and push the
                envelope"</p>
        </div>

        <div class="row">
            <div class="col-lg-6" data-aos="zoom-out" data-aos-delay="100">
                <img src="/storage/images/design/about-bg.jpg" style="max-height: 600px; width:600px" class="img-fluid  img-thumbnail" alt="">
            </div>
            <div class="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center" data-aos="fade-up"
                data-aos-delay="100">
                <h3>Apprenez à Nous Connaître</h3>
                <ul>
                    <li>
                        <i class="bx bx-store-alt"></i>
                        <div>
                            <h5>{{ config('app.name') }}</h5>
                            <p>"wa exploiter le pouvoir des vêtements et des sacs"
                            </p>
                        </div>
                    </li>

                </ul>

                <p>
                   {{$about->content}}

                </p>

            </div>
        </div>

    </div>
</section><!-- End About Section -->
