    <!-- ======= Footer ======= -->
    <footer id="footer">
        @if (request()->is('/'))
            <div class="footer-newsletter">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-6">
                            <h4>Rejoignez notre newsletter</h4>
                            <p>Nous vous informerons de nos meilleurs nouveaux produits</p>
                            <form @submit.prevent="handleSubscribe">
                                <input id="subscribeEmail" type="email" name="email" required><input   type="submit" value="S'abonner">
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        @endif


        <div class="footer-top">
            <div class="container">
                <div class="row">

                    <div class="col-lg-3 col-md-6 footer-contact">
                        <h3>BizLand<span>.</span></h3>
                        <p>
                            {{ $address->content }} <br>
                            <strong>Phone:</strong> {{ $phone->content }}<br>
                            <strong>Email:</strong> {{ $email->content }}<br>
                        </p>
                    </div>

                    <div class="col-lg-3 col-md-6 footer-links">
                        <h4>Liens rapides</h4>
                        <ul>
                            <li><i class="bx bx-chevron-right"></i> <a href="{{ route('home.index') }}">Accueil</a>
                            </li>
                            <li><i class="bx bx-chevron-right"></i> <a href="{{ route('home.about') }}">Propos us</a>
                            </li>
                            <li><i class="bx bx-chevron-right"></i> <a href="{{ route('gallery.index') }}">Galerie
                                </a></li>
                            <li><i class="bx bx-chevron-right"></i> <a href="{{ route('contact.index') }}">Contact</a>
                            </li>
                        </ul>
                    </div>

                    <div class="col-lg-3 col-md-6 footer-links py-3 " style="margin-top: -14px; padding-right: 0 ">

                        <h4>Notre Horaire</h4>

                        <ul>
                            <li><i class="fa fa-circle mr-1" style="font-size: 8px"></i>Samedi-Jeudi: 9:00h - 20:00H
                            </li>
                            <li><i class="fa fa-circle mr-1" style="font-size: 8px"></i>Vendreudi: Off</li>
                        </ul>

                    </div>

                    <div class="col-lg-3 col-md-6 footer-links">
                        <h4>Nos réseaux sociaux</h4>
                        <p>n'hésitez pas à nous consulter sur les réseaux sociaux</p>
                        <div class="social-links mt-3">
                            @if ($facebook->content != '')
                                <a href="{{ $facebook->content }}" class="facebook"><i
                                        class="bx bxl-facebook"></i></a>
                            @endif
                            @if ($instagram->content != '')
                                <a href="{{ $instagram->content }}" class="instagram"><i
                                        class="bx bxl-instagram"></i></a>
                            @endif

                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="container py-4">
            <div class="copyright">
                &copy; Copyright <strong><span>BizLand</span></strong>. All Rights Reserved
            </div>
            <div class="credits">
                <!-- All the links in the footer should remain intact. -->
                <!-- You can delete the links only if you purchased the pro version. -->
                <!-- Licensing information: https://bootstrapmade.com/license/ -->
                <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/bizland-bootstrap-business-template/ -->
                Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
        </div>
    </footer><!-- End Footer -->
