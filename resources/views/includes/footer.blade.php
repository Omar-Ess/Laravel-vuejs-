    <!-- ======= Footer ======= -->
    <footer id="footer">

        <div class="footer-top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6">
                        <div class="footer-info">
                            <h3>  {{ config('app.name') }}</h3>
                            <p>
                                {{ $address->content }}<br />
                                <strong>Phone:</strong> {{ $phone->content }}<br />
                                <strong>Email:</strong> {{ $email->content }}<br />
                            </p>
                            <div class="social-links mt-3">
                                <a href="{{ $facebook->content }}" class="facebook"><i
                                        class="bx bxl-facebook"></i></a>
                                <a href="{{ $instagram->content }}" class="instagram"><i class="bx bxl-instagram"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-2 col-md-6 footer-links">
                        <h4>Liens Rapides</h4>
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

                    <div class="col-lg-2 col-md-6 footer-links">
                        <h4>Notre Horaire</h4>

                        <ul>
                            <li><i class="fa fa-circle mr-1" style="font-size: 8px"></i>Lundi-Samedi: 9:00h - 20:00H
                            </li>
                            <li><i class="fa fa-circle mr-1" style="font-size: 8px"></i>Dimanche: Off</li>
                        </ul>
                    </div>

                    <div class="col-lg-4 col-md-6 footer-newsletter">
                        <h4>Nos réseaux sociaux</h4>
                        <p>N'hésitez pas à nous consulter sur les réseaux sociaux</p>
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
