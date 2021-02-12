    $(function () {
        //ロード１秒後にロゴ表示
        $(document).ready(function () {
            $('svg').addClass('active');
        })




        //ステータスバーでも波を表示させる
        let height = window.innerHeight;
        document.documentElement.style.setProperty('--vh', height / 100 + 'px');

        $('.nav__bg').click(function () {
            $(this).addClass('nav__bg--active');
        })

        
        // ハンバーガーメニュー関連
        $('.hamburger').click(function() {
            if($("#check").prop("checked")==true) {
                $('.hamburger__ul').fadeIn()
            } else {
                $('.hamburger__ul').delay(300).fadeOut()
                $('.hamburger__ul').css('display','none')
            }

        })

        $('.hamburger').click(function() {

        })

        $('.hamburger__a').click(function() {
            $("#check").prop("checked", false);
        })

        $('.hamburger__a--skill').click(function() {
            $(".skill__card").css('opacity','0.9')
            $(".skill__card").css('transform','translateY(0)')
        })

                


        // スライダー
        $('.works__slider').slick({
            autoplay: true,
            autoplaySpeed: 4000,
            dots: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            // centerMode: true,
            arrows: true,
            prevArrow: '<img src="images/left.png" class="slide-arrow prev-arrow">',
            nextArrow: '<img src="images/right.png" class="slide-arrow next-arrow">',
        })

        $('.works__slider--sp').slick({
            autoplay: true,
            autoplaySpeed: 4000,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            arrows: true,
            prevArrow: '<img src="images/left.png" class="slide-arrow prev-arrow">',
            nextArrow: '<img src="images/right.png" class="slide-arrow next-arrow">',
        })



        // モーダルウィンドウ

        $('.modal__close , .modal__bg').click(function () {
            $('.modal').fadeOut();

        });

        $('.works__check--1').click(function () {
            $('.modal').fadeIn();
            $('.modal__img').attr('src', 'images/woman1.jpg')
        })

        $('.works__check--2').click(function () {
            $('.modal').fadeIn();
            $('.modal__img').attr('src', 'images/bridge.jpg')
        })

        $('.works__check--3').click(function () {
            $('.modal').fadeIn();
            $('.modal__img').attr('src', 'images/cat.jpg')
        })

        $('.works__check--4').click(function () {
            $('.modal').fadeIn();
            $('.modal__img').attr('src', 'images/woman2.jpg')
        })




        // フェードイン

        $(window).scroll(function () {
            $('.fadein').each(function () {
                var targetElement = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > targetElement - windowHeight + 50) {
                    $(this).css('opacity', '.4');
                    $(this).css('transform', 'translateY(0)');
                }
            });
        });


        $(window).scroll(function () {
            $('.fadein2').each(function () {
                var targetElement = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > targetElement - windowHeight + -100) {
                    $(this).css('opacity', '.6');
                    $(this).css('transform', 'translateY(0)');
                }
            });
        });

        $(window).scroll(function () {
            $('.fadein3').each(function () {
                var targetElement = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > targetElement - windowHeight + -0) {
                    $(this).css('opacity', '1');
                    $(this).css('transform', 'translateY(0)');
                }
            });
        });

        $(window).scroll(function () {
            $('.fadein4').each(function () {
                var targetElement = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > targetElement - windowHeight + -100) {
                    $(this).css('opacity', '1');
                    $(this).css('transform', 'translateY(0)');
                }
            });
        });

        $(function () {
            var effect_pos = 0; // 画面下からどの位置でフェードさせるか(px)
            var effect_move = 30; // どのぐらい要素を動かすか(px)
            var effect_time = 800; // エフェクトの時間(ms) 1秒なら1000

            // フェードする前のcssを定義
            $('.scroll-fade').css({
                opacity: 0,
                transform: 'translateY(' + effect_move + 'px)',
                transition: effect_time + 'ms'
            });

            // スクロールまたはロードするたびに実行
            $(window).on('scroll load', function () {
                var scroll_top = $(this).scrollTop();
                var scroll_btm = scroll_top + $(this).height();
                effect_pos = scroll_btm - effect_pos;

                // effect_posがthis_posを超えたとき、エフェクトが発動
                $('.scroll-fade').each(function () {
                    var this_pos = $(this).offset().top;
                    if (effect_pos > this_pos) {
                        $(this).css({
                            opacity: 1,
                            transform: 'translateY(0)'
                        });
                    }
                });
            });
        });

        $(function () {
            var effect_pos = -180; // 画面下からどの位置でフェードさせるか(px)
            var effect_move = 60; // どのぐらい要素を動かすか(px)
            var effect_time = 800; // エフェクトの時間(ms) 1秒なら1000

            // フェードする前のcssを定義
            $('.scroll-fade2').css({
                opacity: 0,
                transform: 'translateY(' + effect_move + 'px)',
                transition: effect_time + 'ms'
            });

            // スクロールまたはロードするたびに実行
            $(window).on('scroll load', function () {
                var scroll_top = $(this).scrollTop();
                var scroll_btm = scroll_top + $(this).height();
                effect_pos = scroll_btm - effect_pos;

                // effect_posがthis_posを超えたとき、エフェクトが発動
                $('.scroll-fade2').each(function () {
                    var this_pos = $(this).offset().top;
                    if (effect_pos > this_pos) {
                        $(this).css({
                            opacity: 1,
                            transform: 'translateY(0)'
                        });
                    }
                });
            });
        });


        $(function () {
            var effect_pos = 0; // 画面下からどの位置でフェードさせるか(px)
            var effect_move = 50; // どのぐらい要素を動かすか(px)
            var effect_time = 800; // エフェクトの時間(ms) 1秒なら1000

            // フェードする前のcssを定義
            $('.scroll-fade3').css({
                opacity: 0,
                transform: 'translateY(' + effect_move + 'px)',
                transition: effect_time + 'ms'
            });

            // スクロールまたはロードするたびに実行
            $(window).on('scroll load', function () {
                var scroll_top = $(this).scrollTop();
                var scroll_btm = scroll_top + $(this).height();
                effect_pos = scroll_btm - effect_pos;

                // effect_posがthis_posを超えたとき、エフェクトが発動
                $('.scroll-fade3').each(function () {
                    var this_pos = $(this).offset().top;
                    if (effect_pos > this_pos) {
                        $(this).css({
                            opacity: .4,
                            transform: 'translateY(0)'
                        });
                    }
                });
            });
        });

        $(function () {
            var effect_pos = -300; // 画面下からどの位置でフェードさせるか(px)
            var effect_move = 50; // どのぐらい要素を動かすか(px)
            var effect_time = 800; // エフェクトの時間(ms) 1秒なら1000

            // フェードする前のcssを定義
            $('.scroll-fade4').css({
                opacity: 0,
                transform: 'translateY(' + effect_move + 'px)',
                transition: effect_time + 'ms'
            });

            // スクロールまたはロードするたびに実行
            $(window).on('scroll load', function () {
                var scroll_top = $(this).scrollTop();
                var scroll_btm = scroll_top + $(this).height();
                effect_pos = scroll_btm - effect_pos;

                // effect_posがthis_posを超えたとき、エフェクトが発動
                $('.scroll-fade4').each(function () {
                    var this_pos = $(this).offset().top;
                    if (effect_pos > this_pos) {
                        $(this).css({
                            opacity: .6,
                            transform: 'translateY(0)'
                        });
                    }
                });
            });
        });

        $(function () {
            var effect_pos = -800; // 画面下からどの位置でフェードさせるか(px)
            var effect_move = 50; // どのぐらい要素を動かすか(px)
            var effect_time = 800; // エフェクトの時間(ms) 1秒なら1000

            // フェードする前のcssを定義
            $('.scroll-fade5').css({
                opacity: 0,
                transform: 'translateY(' + effect_move + 'px)',
                transition: effect_time + 'ms'
            });

            // スクロールまたはロードするたびに実行
            $(window).on('scroll load', function () {
                var scroll_top = $(this).scrollTop();
                var scroll_btm = scroll_top + $(this).height();
                effect_pos = scroll_btm - effect_pos;

                // effect_posがthis_posを超えたとき、エフェクトが発動
                $('.scroll-fade5').each(function () {
                    var this_pos = $(this).offset().top;
                    if (effect_pos > this_pos) {
                        $(this).css({
                            opacity: .9,
                            transform: 'translateY(0)'
                        });
                    }
                });
            });
        });

        $(function () {
            var effect_pos = -1100; // 画面下からどの位置でフェードさせるか(px)
            var effect_move = 50; // どのぐらい要素を動かすか(px)
            var effect_time = 800; // エフェクトの時間(ms) 1秒なら1000

            // フェードする前のcssを定義
            $('.scroll-fade6').css({
                opacity: 0,
                transform: 'translateY(' + effect_move + 'px)',
                transition: effect_time + 'ms'
            });

            // スクロールまたはロードするたびに実行
            $(window).on('scroll load', function () {
                var scroll_top = $(this).scrollTop();
                var scroll_btm = scroll_top + $(this).height();
                effect_pos = scroll_btm - effect_pos;

                // effect_posがthis_posを超えたとき、エフェクトが発動
                $('.scroll-fade6').each(function () {
                    var this_pos = $(this).offset().top;
                    if (effect_pos > this_pos) {
                        $(this).css({
                            opacity: .9,
                            transform: 'translateY(0)'
                        });
                    }
                });
            });
        });

        $(function () {
            var effect_pos = -900; // 画面下からどの位置でフェードさせるか(px)
            var effect_move = 50; // どのぐらい要素を動かすか(px)
            var effect_time = 800; // エフェクトの時間(ms) 1秒なら1000

            // フェードする前のcssを定義
            $('.scroll-fade7').css({
                opacity: 0,
                transform: 'translateY(' + effect_move + 'px)',
                transition: effect_time + 'ms'
            });

            // スクロールまたはロードするたびに実行
            $(window).on('scroll load', function () {
                var scroll_top = $(this).scrollTop();
                var scroll_btm = scroll_top + $(this).height();
                effect_pos = scroll_btm - effect_pos;

                // effect_posがthis_posを超えたとき、エフェクトが発動
                $('.scroll-fade7').each(function () {
                    var this_pos = $(this).offset().top;
                    if (effect_pos > this_pos) {
                        $(this).css({
                            opacity: .9,
                            transform: 'translateY(0)'
                        });
                    }
                });
            });
        });



    })