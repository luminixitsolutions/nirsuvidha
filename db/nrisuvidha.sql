-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 27, 2026 at 07:05 PM
-- Server version: 8.4.3
-- PHP Version: 8.3.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nrisuvidha`
--

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` bigint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `owner` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` bigint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cms_items`
--

CREATE TABLE `cms_items` (
  `id` bigint UNSIGNED NOT NULL,
  `section` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cms_key` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cms_items`
--

INSERT INTO `cms_items` (`id`, `section`, `cms_key`, `value`, `created_at`, `updated_at`) VALUES
(1, 'home', 'hero_title_before', 'Financial Super-App for ', '2026-04-27 11:58:18', '2026-04-27 11:58:18'),
(2, 'home', 'hero_title_gold', 'Global Indians', '2026-04-27 11:58:18', '2026-04-27 11:58:18'),
(3, 'home', 'hero_subtitle', 'From taxes and investments to remittances and compliance — manage everything in one place, built exclusively for NRIs and OCIs.', '2026-04-27 11:58:18', '2026-04-27 11:58:18'),
(4, 'home', 'hero_primary_cta', 'Get Started – It\'s Free', '2026-04-27 11:58:18', '2026-04-27 11:58:18'),
(5, 'home', 'hero_secondary_cta', 'Login', '2026-04-27 11:58:18', '2026-04-27 11:58:18'),
(6, 'home', 'section_services_title', 'All-in-One NRI Services Platform', '2026-04-27 11:58:18', '2026-04-27 11:58:18'),
(7, 'home', 'section_services_subtitle', 'Manage your financial, legal, and investment needs in India from anywhere in the world with a single trusted platform.', '2026-04-27 11:58:18', '2026-04-27 11:58:18'),
(8, 'home', 'section_how_it_works_title', 'How It Works', '2026-04-27 11:58:18', '2026-04-27 11:58:18'),
(9, 'home', 'testimonials_heading', 'Trusted by NRIs Worldwide', '2026-04-27 11:58:18', '2026-04-27 11:58:18'),
(10, 'home', 'testimonials_subtitle', 'Real stories from global Indians who simplified legal, tax, and banking in India with NRI Suvidha.', '2026-04-27 11:58:18', '2026-04-27 11:58:18'),
(11, 'home', 'site_name_short', 'NRI Suvidha', '2026-04-27 11:58:18', '2026-04-27 11:58:18'),
(12, 'home', 'about_badge', 'About us', '2026-04-27 11:58:18', '2026-04-27 11:58:18'),
(13, 'home', 'about_title_before', 'Your India Stack. ', '2026-04-27 11:58:18', '2026-04-27 11:58:18'),
(14, 'home', 'about_title_gold', 'Simplified.', '2026-04-27 11:58:18', '2026-04-27 11:58:18'),
(15, 'home', 'about_lead', 'A Financial Super-App built exclusively for NRIs & OCIs', '2026-04-27 11:58:18', '2026-04-27 11:58:18'),
(16, 'home', 'about_p1', 'NRI Suvidha is your trusted partner for managing financial, legal, and investment needs in India from anywhere in the world.', '2026-04-27 11:58:18', '2026-04-27 11:58:18'),
(17, 'home', 'about_p2', 'From banking and taxation to real estate and compliance, we bring everything into one unified platform — eliminating the need to coordinate with multiple agents or travel.', '2026-04-27 11:58:18', '2026-04-27 11:58:18'),
(18, 'home', 'about_goal_kicker', 'Our goal is simple:', '2026-04-27 11:58:18', '2026-04-27 11:58:18'),
(19, 'home', 'about_goal_statement', 'Make India-related tasks effortless for global Indians.', '2026-04-27 11:58:18', '2026-04-27 11:58:18'),
(20, 'home', 'about_foot', 'With verified experts, secure digital processes, and end-to-end assistance, you stay in control while we handle the complexity.', '2026-04-27 11:58:18', '2026-04-27 11:58:18'),
(21, 'home', 'how_work_title', 'Simple. Transparent. Fully Managed.', '2026-04-27 11:58:18', '2026-04-27 11:58:18'),
(22, 'home', 'how_work_subtitle', 'Five clear steps from signup to completion — the same care we bring to every NRI and OCI.', '2026-04-27 11:58:18', '2026-04-27 11:58:18'),
(23, 'home', 'stats_json', '[{\"kind\":\"count\",\"title\":\"Global Indians served\",\"end\":50,\"suffix\":\"K+\"},{\"kind\":\"text\",\"title\":\"India remittances\",\"value\":\"\\u20b92500Cr+\"},{\"kind\":\"count\",\"title\":\"Countries supported\",\"end\":100,\"suffix\":\"+\"},{\"kind\":\"text\",\"title\":\"User rating\",\"value\":\"4.9\\u2605\"}]', '2026-04-27 11:58:18', '2026-04-27 11:58:18'),
(24, 'home', 'hero_badge_lines_json', '[\"Trusted by 100K+ NRIs Worldwide\",\"Serving NRIs across 75+ cities in India\",\"120K+ services fulfilled for global Indians\",\"Secure processes built for NRIs & OCIs\",\"Loved by families in the US, UK, UAE & Canada\"]', '2026-04-27 11:58:18', '2026-04-27 11:58:18'),
(25, 'home', 'about_features_json', '[{\"icon\":\"fa-shield-halved\",\"title\":\"Secure & Compliant\",\"desc\":\"Bank-grade security\"},{\"icon\":\"fa-headset\",\"title\":\"Expert Support\",\"desc\":\"Verified professionals\"},{\"icon\":\"fa-globe\",\"title\":\"Anywhere, Anytime\",\"desc\":\"Access from any device\"},{\"icon\":\"fa-bolt\",\"title\":\"Fast & Efficient\",\"desc\":\"Save time, stay ahead\"}]', '2026-04-27 11:58:18', '2026-04-27 11:58:18'),
(26, 'home', 'how_work_steps_json', '[{\"n\":1,\"icon\":\"fa-user-check\",\"title\":\"Sign Up & Verify\",\"body\":\"Create your account and complete secure KYC verification.\"},{\"n\":2,\"icon\":\"fa-hand-pointer\",\"title\":\"Choose Your Service\",\"body\":\"Select from banking, tax, legal, investment, or property services.\"},{\"n\":3,\"icon\":\"fa-user-tie\",\"title\":\"Get Expert Assigned\",\"body\":\"A dedicated expert is assigned to manage your request.\"},{\"n\":4,\"icon\":\"fa-chart-line\",\"title\":\"Track Progress\",\"body\":\"Monitor status, upload documents, and get real-time updates.\"},{\"n\":5,\"icon\":\"fa-circle-check\",\"title\":\"Task Completed\",\"body\":\"We handle everything end-to-end with full transparency.\"}]', '2026-04-27 11:58:18', '2026-04-27 11:58:18'),
(27, 'home', 'why_choose_points_json', '[\"One Platform for All India Needs\",\"Verified Experts & Compliance\",\"Secure Document Handling\",\"Transparent Pricing\"]', '2026-04-27 11:58:18', '2026-04-27 11:58:18'),
(28, 'home', 'hero_right_image', 'homepage/vPLlkDmgX9Lulm7Nw8cMKx8S9pgxU8y1n95xBB56.png', '2026-04-27 12:26:16', '2026-04-27 12:26:16'),
(29, 'home', 'services_section_image', 'homepage/kfkW2myrtZ5hP7xbsX5YyKgCoFdjvZyXK41121k0.png', '2026-04-27 12:27:09', '2026-04-27 12:27:09'),
(30, 'home', 'about_section_image', 'homepage/cmTumLAiWYdyyDcB5RcGs9qdHfOGBmD8BEFINLYO.png', '2026-04-27 12:28:00', '2026-04-27 12:28:00');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `queue` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `attempts` smallint UNSIGNED NOT NULL,
  `reserved_at` int UNSIGNED DEFAULT NULL,
  `available_at` int UNSIGNED NOT NULL,
  `created_at` int UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_jobs` int NOT NULL,
  `pending_jobs` int NOT NULL,
  `failed_jobs` int NOT NULL,
  `failed_job_ids` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `options` mediumtext COLLATE utf8mb4_unicode_ci,
  `cancelled_at` int DEFAULT NULL,
  `created_at` int NOT NULL,
  `finished_at` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2026_04_27_000001_create_cms_items_table', 1),
(5, '2026_04_28_000001_create_services_table', 2),
(6, '2026_04_28_100000_create_testimonials_table', 3),
(7, '2026_04_28_120000_create_trusted_partners_table', 4);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` bigint UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `icon` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'e.g. fa-solid fa-scale-balanced',
  `short_details` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `full_details` longtext COLLATE utf8mb4_unicode_ci,
  `below_short_title` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `photo` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'Path under storage/app/public',
  `multiple_photos` json DEFAULT NULL,
  `sort_order` int UNSIGNED NOT NULL DEFAULT '0',
  `is_published` tinyint(1) NOT NULL DEFAULT '1',
  `link_href` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'e.g. /#services or /contact',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `title`, `icon`, `short_details`, `full_details`, `below_short_title`, `photo`, `multiple_photos`, `sort_order`, `is_published`, `link_href`, `created_at`, `updated_at`) VALUES
(1, 'Legal Services', 'fa-solid fa-scale-balanced', 'Wills, POA, probate, and inheritance workflows built for NRIs and OCIs.', NULL, 'Power of Attorney, wills & inheritance support', NULL, NULL, 0, 1, '/#services', '2026-04-27 12:12:05', '2026-04-27 12:12:05'),
(2, 'Banking', 'fa-solid fa-building-columns', 'Open NRE/NRO accounts, fixed deposits, and streamline cross-border transfers.', NULL, 'NRE/NRO accounts & remittances', NULL, NULL, 10, 1, '/#services', '2026-04-27 12:12:05', '2026-04-27 12:12:05'),
(3, 'Investment Services', 'fa-solid fa-chart-line', 'Mutual funds, equities, and portfolio reviews aligned with your India goals.', NULL, 'Mutual funds, stocks & portfolio guidance', NULL, NULL, 20, 1, '/#services', '2026-04-27 12:12:05', '2026-04-27 12:12:05'),
(4, 'Tax Compliance', 'fa-solid fa-file-invoice-dollar', 'ITR, DTAA, and reporting support so global income stays compliant.', NULL, 'ITR, DTAA & global income compliance', NULL, NULL, 30, 1, '/#services', '2026-04-27 12:12:05', '2026-04-27 12:12:05'),
(5, 'Business Setup & Advisory', 'fa-solid fa-briefcase', 'Incorporation, GST, and ongoing compliance for your India presence.', NULL, 'Company registration & compliance', NULL, NULL, 40, 1, '/#services', '2026-04-27 12:12:05', '2026-04-27 12:12:05'),
(6, 'Real Estate Services', 'fa-solid fa-house-chimney', 'Due diligence, documentation, and closure support for property in India.', NULL, 'Buy, sell & legal verification', NULL, NULL, 50, 1, '/#services', '2026-04-27 12:12:05', '2026-04-27 12:12:05'),
(7, 'Secure Onboarding', 'fa-solid fa-shield-halved', 'Verified KYC, encrypted uploads, and a single vault for sensitive files.', NULL, 'KYC & document vault', NULL, NULL, 60, 1, '/#services', '2026-04-27 12:12:05', '2026-04-27 12:12:05'),
(8, 'Expert Assistance', 'fa-solid fa-headset', 'Specialists and relationship managers who coordinate your end-to-end request.', NULL, 'Dedicated relationship managers', NULL, NULL, 70, 1, '/#contact', '2026-04-27 12:12:05', '2026-04-27 12:12:05');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('knsHcdbEyeoHwi1LprQxHexUAFh1Ot6Eg1S3l7eM', 1, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36', 'eyJfdG9rZW4iOiJVR1RPeUNmWHo3MTBjakxkSGE5cFM5Nk56Ukw3cG41cmVMSmZHMXdNIiwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119LCJfcHJldmlvdXMiOnsidXJsIjoiaHR0cDpcL1wvMTI3LjAuMC4xOjgwMDBcL2FkbWluIiwicm91dGUiOiJhZG1pbi5kYXNoYm9hcmQifSwibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiOjF9', 1777313932);

-- --------------------------------------------------------

--
-- Table structure for table `testimonials`
--

CREATE TABLE `testimonials` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `designation` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `rating` tinyint UNSIGNED NOT NULL DEFAULT '5',
  `feedback` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `photo` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `sort_order` int UNSIGNED NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `testimonials`
--

INSERT INTO `testimonials` (`id`, `name`, `designation`, `rating`, `feedback`, `photo`, `is_active`, `sort_order`, `created_at`, `updated_at`) VALUES
(1, 'Lucia E. Nugent', 'NRI · Singapore', 5, '\"Finally, one place for India compliance\"\r\n\r\nTax filing and DTAA guidance without chasing multiple vendors — clear timelines and responsive advisors.', 'testimonials/photos/f7Mt5eQZPVH6AG0c55tNQ9ghcgesDgmHo1zNyiEu.jpg', 1, 0, '2026-04-27 12:14:30', '2026-04-27 12:30:43'),
(2, 'Brenda R. Smith', 'OCI · United States', 5, '\"Property transfer felt manageable\"\r\n\r\nLegal verification and documentation support from abroad made a complex Mumbai sale straightforward.', 'testimonials/photos/LfGhp9NHYqefvcGJJsFo3COZ4YeCFY9zbTZxhtcJ.jpg', 1, 1, '2026-04-27 12:14:30', '2026-04-27 12:36:54'),
(3, 'Brian B. Wilkerson', 'NRI · UAE', 5, '\"Banking and remittance in one flow\"\r\n\r\nNRE account questions and repatriation steps were explained end-to-end with no guesswork.', 'testimonials/photos/Uqj3Q9OAlEzfn4PTmZOYHK3lMOl2TRRO1sVlqFIf.jpg', 1, 2, '2026-04-27 12:14:30', '2026-04-27 12:37:11'),
(4, 'Miguel L. Benbow', 'NRI · UK', 5, '\"Transparent from quote to completion\"\r\n\r\nEvery milestone was documented — I always knew what was happening with my India filings.', 'testimonials/photos/L03Uv0RbdfTYYcQ0SVbV6JJPbzpcubtRrjIvvE9W.jpg', 1, 3, '2026-04-27 12:14:31', '2026-04-27 12:37:28'),
(5, 'Hilda A. Sheppard', 'NRI · Canada', 5, '\"Experts who understand NRIs\"\r\n\r\nThe team speaks both Indian regulations and overseas realities — huge relief for our family.', 'testimonials/photos/mL2VrDzV6us8qaAmW3nXOZGKlptOvMyf60rrkQUZ.jpg', 1, 4, '2026-04-27 12:14:31', '2026-04-27 12:37:41');

-- --------------------------------------------------------

--
-- Table structure for table `trusted_partners`
--

CREATE TABLE `trusted_partners` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logo` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `sort_order` int UNSIGNED NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `trusted_partners`
--

INSERT INTO `trusted_partners` (`id`, `name`, `logo`, `is_active`, `sort_order`, `created_at`, `updated_at`) VALUES
(1, 'Channel partner 1', 'trusted_partners/logos/4vvjvSPZjAUd2j28365dZZAv1kIsq7DufR11m9HR.png', 1, 0, '2026-04-27 12:17:18', '2026-04-27 12:31:55'),
(2, 'Channel partner 2', 'trusted_partners/logos/UYYY1NtfNYqTkO0MM4IIYXW1tGUjt4Oj0liFwEhK.png', 1, 1, '2026-04-27 12:17:18', '2026-04-27 12:32:13'),
(3, 'Channel partner 3', 'trusted_partners/logos/LnbQgT3ebizzIaFyBL82FxjtAVhIlnX6NePrmznO.png', 1, 2, '2026-04-27 12:17:18', '2026-04-27 12:32:29'),
(4, 'Channel partner 4', 'trusted_partners/logos/QNVjbGSb6WOfc0KnjJyQ6hZluaIFIHVhIAKTUxos.png', 1, 3, '2026-04-27 12:17:18', '2026-04-27 12:32:43'),
(5, 'Channel partner 5', 'trusted_partners/logos/O3RB2TxgJceIfcdV10Iny1P2hoo7K2yJ1cEhn2zt.png', 1, 4, '2026-04-27 12:17:18', '2026-04-27 12:32:54'),
(6, 'Channel partner 6', 'trusted_partners/logos/jR0bp7VpUtIXFJiT2FdbLVbQTRCpKAGzip2w0mS4.png', 1, 5, '2026-04-27 12:17:18', '2026-04-27 12:33:07');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'NRI Suvidha Admin', 'admin@nrisuvidha.com', NULL, '$2y$12$fdYDZgpNBa59G6Iy/26byujdm02Fptzpv2zAa3bc0JRSYzZV7aDF6', '2wec3COfxDemxQw2gZnWYbWo26T2yUjsTxmvhkCZr7ICMVuASjH8FmWN5Awb', '2026-04-27 11:58:18', '2026-04-27 12:04:06');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`),
  ADD KEY `cache_expiration_index` (`expiration`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`),
  ADD KEY `cache_locks_expiration_index` (`expiration`);

--
-- Indexes for table `cms_items`
--
ALTER TABLE `cms_items`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `cms_items_section_cms_key_unique` (`section`,`cms_key`),
  ADD KEY `cms_items_section_index` (`section`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `testimonials`
--
ALTER TABLE `testimonials`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `trusted_partners`
--
ALTER TABLE `trusted_partners`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cms_items`
--
ALTER TABLE `cms_items`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `testimonials`
--
ALTER TABLE `testimonials`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `trusted_partners`
--
ALTER TABLE `trusted_partners`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
