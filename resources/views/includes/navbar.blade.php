        <!-- ======= Top Bar ======= -->
        <div id="topbar" class="d-none d-lg-flex align-items-center fixed-top">
            <div class="container d-flex">
                <div class="contact-info mr-auto">
                    <i class="fa fa-envelope"></i> <a href="mailto:{{ $email->content }}">{{ $email->content }}</a>
                    <i class="fa fa-phone-alt"></i> {{ $phone->content }}
                </div>
                <div class="social-links">
                    @if ($facebook->content != '')
                        <a href="{{ $facebook->content }}"><i class="fab fa-facebook-f"></i></a>

                    @endif
                    @if ($instagram->content != '')
                        <a href="{{ $instagram->content }}"><i class=" fab fa-instagram"></i></a>

                    @endif
                    @auth
                    <a href='/admin/dashboard'><i class="fa fa-lock-open"></i></a>

                        @else
                    <a href='/admin/dashboard'><i class="fa fa-lock"></i></a>

                    @endauth

                </div>
            </div>
        </div>
        <!-- ======= Header ======= -->
        <header id="header" class="fixed-top">
            <div class="container d-flex align-items-center">

                <h1 class="logo mr-auto"><a href="{{ route('home.index') }}">
                        <img class="rotate-n-15" src="/storage/images/design/logo.png" alt="">
                        {{ config('app.name', 'Tapis') }}<span>.</span></a></h1>
                <!-- Uncomment below if you prefer to use an image logo -->
                {{-- <a href="index.html" class="logo mr-auto"><img src="/storage/images/design/logo.png" alt=""></a> --}}

                <nav class="nav-menu d-none d-lg-block">
                    <ul>
                        <li class="{{ request()->is('/') ? 'active ' : '' }}"><a
                                href="{{ route('home.index') }}">Accueil</a></li>
                        <li class="{{ request()->is('about') ? 'active ' : '' }}">
                            <a href="{{ route('home.about') }}">Propos</a>
                        </li>
                        <li class="{{ request()->is('gallery') ? 'active ' : '' }}"><a
                                href="{{ route('gallery.index') }}">Galerie</a></li>
                        <li class=" {{ request()->is('contact') ? 'active ' : '' }}"><a
                                href="{{ route('contact.index') }}"
                                class="{{ request()->is('/contact') ? 'active ' : '' }}">Contact</a></li>
                        <li class="d-lg-none"><a href="/admin/dashboard" >Admin</a></li>

                    </ul>
                </nav><!-- .nav-menu -->

            </div>
        </header><!-- End Header -->
