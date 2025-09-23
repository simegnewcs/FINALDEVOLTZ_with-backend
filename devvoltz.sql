-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 18, 2025 at 11:22 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `devvoltz`
--

-- --------------------------------------------------------

--
-- Table structure for table `applications`
--

CREATE TABLE `applications` (
  `id` int(11) NOT NULL,
  `project_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `proposal` text DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `status` enum('pending','accepted','rejected','hired') DEFAULT 'pending',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `freelancers`
--

CREATE TABLE `freelancers` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `rating` decimal(3,2) DEFAULT 0.00,
  `reviews` int(11) DEFAULT 0,
  `hourly_rate` decimal(10,2) DEFAULT NULL,
  `skills` text DEFAULT NULL,
  `location` varchar(255) DEFAULT 'Remote',
  `avatar` varchar(500) DEFAULT '/placeholder.svg',
  `description` text DEFAULT NULL,
  `completed_projects` int(11) DEFAULT 0,
  `response_time` varchar(100) DEFAULT 'Within 24 hours',
  `languages` varchar(255) DEFAULT 'English',
  `availability` varchar(100) DEFAULT 'Available',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `freelancers`
--

INSERT INTO `freelancers` (`id`, `name`, `title`, `rating`, `reviews`, `hourly_rate`, `skills`, `location`, `avatar`, `description`, `completed_projects`, `response_time`, `languages`, `availability`, `created_at`, `updated_at`) VALUES
(1, 'Sarah Johnson', 'Full Stack Developer', 4.85, 120, 45.00, 'React,Node.js,TypeScript,GraphQL,AWS', 'Dubai, UAE', '/avatars/sarah.png', 'Experienced full-stack developer with 5+ years building scalable web applications and SaaS products.', 48, 'Within 12 hours', 'English,Arabic', 'Available', '2025-08-29 12:20:43', '2025-08-29 12:20:43'),
(2, 'Ahmed Hassan', 'Mobile App Developer', 4.72, 95, 40.00, 'React Native,Flutter,Android,iOS,Firebase', 'Cairo, Egypt', '/avatars/ahmed.png', 'Mobile app specialist with expertise in cross-platform development, delivering high-performing apps.', 60, 'Within 24 hours', 'English', 'Available', '2025-08-29 12:20:43', '2025-08-29 12:20:43'),
(3, 'Meron Tadesse', 'UI/UX Designer', 4.90, 88, 35.00, 'Figma,Adobe XD,Prototyping,User Research', 'Addis Ababa, Ethiopia', '/avatars/meron.png', 'Creative designer focused on intuitive and user-centered design solutions for mobile and web.', 32, 'Within 24 hours', 'English,Amharic', 'Busy', '2025-08-29 12:20:43', '2025-08-29 12:20:43'),
(4, 'David Wilson', 'Data Scientist', 4.75, 110, 50.00, 'Python,Machine Learning,SQL,Tableau', 'Remote', '/avatars/david.png', 'Data scientist with experience in machine learning and data visualization for business insights.', 40, 'Within 48 hours', 'English,French', 'Available', '2025-08-29 12:20:43', '2025-08-29 12:20:43'),
(5, 'Hana Getachew', 'Frontend Developer', 4.60, 77, 30.00, 'HTML,CSS,JavaScript,React,Next.js', 'Addis Ababa, Ethiopia', '/avatars/hana.png', 'Frontend developer passionate about creating modern, responsive, and accessible user interfaces.', 25, 'Within 24 hours', 'English,Amharic', 'Available', '2025-08-29 12:20:43', '2025-08-29 12:20:43');

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `sender_id` int(11) NOT NULL,
  `receiver_id` int(11) NOT NULL,
  `content` text NOT NULL,
  `read` tinyint(1) DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `budget` varchar(100) DEFAULT NULL,
  `deadline` date DEFAULT NULL,
  `skills` text DEFAULT NULL,
  `client_id` int(11) NOT NULL,
  `duration` varchar(100) DEFAULT NULL,
  `location` varchar(255) DEFAULT 'Remote',
  `proposals` int(11) DEFAULT 0,
  `rating` decimal(3,2) DEFAULT 0.00,
  `verified` tinyint(1) DEFAULT 0,
  `status` enum('open','in_progress','completed','cancelled') DEFAULT 'open',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `title`, `description`, `budget`, `deadline`, `skills`, `client_id`, `duration`, `location`, `proposals`, `rating`, `verified`, `status`, `created_at`, `updated_at`) VALUES
(1, 'E-commerce Web Application Development', 'Looking for an experienced full-stack developer to build a modern e-commerce platform with React and Node.js. Must include payment integration and admin dashboard.', '2000-5000', '2025-09-28', 'React,Node.js,MongoDB,Payment Integration', 5, '2-3 months', 'Remote', 12, 4.80, 1, 'in_progress', '2025-08-29 11:27:27', '2025-09-01 18:04:05'),
(2, 'Mobile App UI/UX Design', 'Need a talented designer to create modern, user-friendly mobile app designs for iOS and Android. Experience with fintech apps preferred.', '800-1500', '2025-09-19', 'UI/UX Design,Figma,Mobile Design,Prototyping', 6, '3-4 weeks', 'Dubai, UAE', 8, 4.90, 1, 'open', '2025-08-29 11:27:27', '2025-08-29 11:27:27'),
(3, 'WordPress Website Development', 'Small business needs a professional WordPress website with custom theme, SEO optimization, and content management system.', '500-1000', '2025-09-12', 'WordPress,PHP,CSS,SEO', 7, '2-3 weeks', 'Addis Ababa, Ethiopia', 15, 4.60, 0, 'open', '2025-08-29 11:27:27', '2025-08-29 11:27:27'),
(4, 'Data Analysis and Visualization', 'Seeking a data analyst to process sales data, create insights, and build interactive dashboards using Python and visualization tools.', '1200-2000', '2025-10-13', 'Python,Data Analysis,Tableau,SQL', 8, '1-2 months', 'Remote', 6, 4.70, 1, 'open', '2025-08-29 11:27:27', '2025-08-29 11:27:27');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `avatar` varchar(500) DEFAULT '/placeholder.svg',
  `bio` text DEFAULT NULL,
  `hourly_rate` decimal(10,2) DEFAULT NULL,
  `location` varchar(255) DEFAULT 'Remote',
  `skills` text DEFAULT NULL,
  `rating` decimal(3,2) DEFAULT 0.00,
  `reviews` int(11) DEFAULT 0,
  `completed_projects` int(11) DEFAULT 0,
  `response_time` varchar(50) DEFAULT 'Within 24 hours',
  `languages` varchar(255) DEFAULT 'English',
  `availability` varchar(50) DEFAULT 'Available',
  `role` enum('freelancer','client') NOT NULL,
  `verified` tinyint(1) DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `title`, `avatar`, `bio`, `hourly_rate`, `location`, `skills`, `rating`, `reviews`, `completed_projects`, `response_time`, `languages`, `availability`, `role`, `verified`, `created_at`, `updated_at`) VALUES
(1, 'Sarah Johnson', 'sarah@example.com', '$2b$10$example', 'Full Stack Developer', '/placeholder.svg', 'Experienced full-stack developer with 5+ years building scalable web applications.', 45.00, 'Dubai, UAE', 'React,Node.js,Python,AWS', 0.00, 0, 0, 'Within 24 hours', 'English', 'Available', 'freelancer', 1, '2025-08-29 11:27:27', '2025-08-29 11:27:27'),
(2, 'Ahmed Hassan', 'ahmed@example.com', '$2b$10$example', 'Mobile App Developer', '/placeholder.svg', 'Mobile app specialist with expertise in cross-platform development.', 40.00, 'Cairo, Egypt', 'React Native,Flutter,iOS,Android', 0.00, 0, 0, 'Within 24 hours', 'English', 'Available', 'freelancer', 1, '2025-08-29 11:27:27', '2025-08-29 11:27:27'),
(3, 'Meron Tadesse', 'meron@example.com', '$2b$10$example', 'UI/UX Designer', '/placeholder.svg', 'Creative designer focused on user-centered design.', 35.00, 'Addis Ababa, Ethiopia', 'Figma,Adobe XD,Prototyping,User Research', 0.00, 0, 0, 'Within 24 hours', 'English', 'Available', 'freelancer', 1, '2025-08-29 11:27:27', '2025-08-29 11:27:27'),
(4, 'David Wilson', 'david@example.com', '$2b$10$example', 'Data Scientist', '/placeholder.svg', 'Data scientist with expertise in machine learning and business intelligence.', 50.00, 'Remote', 'Python,Machine Learning,SQL,Tableau', 0.00, 0, 0, 'Within 24 hours', 'English', 'Available', 'freelancer', 1, '2025-08-29 11:27:27', '2025-08-29 11:27:27'),
(5, 'TechStart Solutions', 'techstart@example.com', '$2b$10$example', 'Technology Company', '/placeholder.svg', 'We build innovative tech solutions for businesses worldwide.', NULL, 'Remote', NULL, 0.00, 0, 0, 'Within 24 hours', 'English', 'Available', 'client', 1, '2025-08-29 11:27:27', '2025-08-29 11:27:27'),
(6, 'FinanceFlow', 'financeflow@example.com', '$2b$10$example', 'Fintech Startup', '/placeholder.svg', 'Revolutionizing the finance industry with cutting-edge technology.', NULL, 'Dubai, UAE', NULL, 0.00, 0, 0, 'Within 24 hours', 'English', 'Available', 'client', 1, '2025-08-29 11:27:27', '2025-08-29 11:27:27'),
(7, 'Local Business Hub', 'localbusiness@example.com', '$2b$10$example', 'Business Services', '/placeholder.svg', 'Helping local businesses grow with digital solutions.', NULL, 'Addis Ababa, Ethiopia', NULL, 0.00, 0, 0, 'Within 24 hours', 'English', 'Available', 'client', 0, '2025-08-29 11:27:27', '2025-08-29 11:27:27'),
(8, 'DataDriven Corp', 'datadriven@example.com', '$2b$10$example', 'Data Analytics Company', '/placeholder.svg', 'Turning data into actionable insights for businesses.', NULL, 'Remote', NULL, 0.00, 0, 0, 'Within 24 hours', 'English', 'Available', 'client', 1, '2025-08-29 11:27:27', '2025-08-29 11:27:27'),
(9, 'Smegn Destew1', 'smegndestew53@gmail.com', '$2b$10$qbcgZlWGmxvr.WyCXbYsVOR1CNX/rpWPlrNjN78/c/Es8qt7.JUOS', NULL, '/placeholder.svg', NULL, NULL, 'Remote', NULL, 0.00, 0, 0, 'Within 24 hours', 'English', 'Available', 'freelancer', 0, '2025-08-29 12:10:25', '2025-08-29 12:10:25'),
(10, 'vercel deploy', 'vercel@gmail.com', '$2b$10$K1IQu4qmOO249WkeaUGEkeibc0Hcv3dWU8i2MeABMQAgGzrgK4sve', NULL, '/placeholder.svg', NULL, NULL, 'Remote', NULL, 0.00, 0, 0, 'Within 24 hours', 'English', 'Available', 'freelancer', 0, '2025-09-18 20:08:17', '2025-09-18 20:08:17'),
(11, 'zefen gojam', 'gojam@gmail.com', '$2b$10$a4kqq1wgi.0vQQ6VmDXXUuOVENZ.OGYgSZK9LID9hkYD3qy0IYF1a', NULL, '/placeholder.svg', NULL, NULL, 'Remote', NULL, 0.00, 0, 0, 'Within 24 hours', 'English', 'Available', 'freelancer', 0, '2025-09-18 20:23:34', '2025-09-18 20:23:34');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `applications`
--
ALTER TABLE `applications`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_application` (`project_id`,`user_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `freelancers`
--
ALTER TABLE `freelancers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sender_id` (`sender_id`),
  ADD KEY `receiver_id` (`receiver_id`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`),
  ADD KEY `client_id` (`client_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `applications`
--
ALTER TABLE `applications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `freelancers`
--
ALTER TABLE `freelancers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `applications`
--
ALTER TABLE `applications`
  ADD CONSTRAINT `applications_ibfk_1` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `applications_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `messages`
--
ALTER TABLE `messages`
  ADD CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`sender_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `messages_ibfk_2` FOREIGN KEY (`receiver_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `projects`
--
ALTER TABLE `projects`
  ADD CONSTRAINT `projects_ibfk_1` FOREIGN KEY (`client_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
