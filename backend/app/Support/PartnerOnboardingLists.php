<?php

namespace App\Support;

final class PartnerOnboardingLists
{
    /** @return list<string> */
    public static function indianStates(): array
    {
        return [
            'Andhra Pradesh',
            'Arunachal Pradesh',
            'Assam',
            'Bihar',
            'Chhattisgarh',
            'Goa',
            'Gujarat',
            'Haryana',
            'Himachal Pradesh',
            'Jharkhand',
            'Karnataka',
            'Kerala',
            'Madhya Pradesh',
            'Maharashtra',
            'Manipur',
            'Meghalaya',
            'Mizoram',
            'Nagaland',
            'Odisha',
            'Punjab',
            'Rajasthan',
            'Sikkim',
            'Tamil Nadu',
            'Telangana',
            'Tripura',
            'Uttar Pradesh',
            'Uttarakhand',
            'West Bengal',
            'Delhi',
            'Jammu and Kashmir',
            'Ladakh',
        ];
    }

    /** @return list<string> */
    public static function languages(): array
    {
        return [
            'Hindi',
            'English',
            'Bengali',
            'Telugu',
            'Marathi',
            'Tamil',
            'Gujarati',
            'Urdu',
            'Kannada',
            'Odia',
            'Malayalam',
            'Punjabi',
            'Assamese',
            'Nepali',
        ];
    }

    /** @return list<string> */
    public static function practiceAreas(): array
    {
        return [
            'Corporate Law',
            'Property/Real Estate Law',
            'Family Law',
            'Criminal Law',
            'Civil Law',
            'Tax Law',
            'Labour Law',
            'Intellectual Property',
            'Banking & Finance',
            'Immigration Law',
            'Consumer Protection',
            'Environmental Law',
            'Constitutional Law',
            'Arbitration & Mediation',
        ];
    }

    /** @return list<string> */
    public static function courtLevels(): array
    {
        return [
            'District Court',
            'High Court',
            'Supreme Court',
            'Tribunals',
            'Lok Adalat',
        ];
    }

    /** @return list<string> */
    public static function clientCategories(): array
    {
        return [
            'Individual Clients',
            'Small Businesses',
            'Medium Enterprises',
            'Large Corporations',
            'Government Bodies',
            'NGOs',
            'International Clients',
        ];
    }

    /** @return list<string> */
    public static function caSpecializations(): array
    {
        return [
            'Direct Tax',
            'Indirect Tax (GST)',
            'Audit & Assurance',
            'Corporate Finance',
            'Forensic Accounting',
            'Management Consulting',
            'International Taxation',
            'Insolvency & Bankruptcy',
            'Company Law',
            'FEMA Compliance',
        ];
    }

    /** @return list<string> */
    public static function industries(): array
    {
        return [
            'Manufacturing',
            'Information Technology',
            'Real Estate',
            'Healthcare',
            'Education',
            'Retail',
            'Banking & Finance',
            'Automobile',
            'Textiles',
            'Pharmaceuticals',
            'Agriculture',
            'Media & Entertainment',
            'Logistics',
            'E-commerce',
        ];
    }

    /** @return list<string> */
    public static function clientSizePreference(): array
    {
        return [
            'Individuals',
            'Startups',
            'SMEs',
            'Large Enterprises',
            'MNCs',
        ];
    }

    /** @return list<string> */
    public static function softwareExpertise(): array
    {
        return [
            'Tally',
            'SAP',
            'QuickBooks',
            'Zoho Books',
            'Oracle',
            'Excel Advanced',
            'GST Software',
            'Income Tax Software',
            'Audit Software',
            'ERP Systems',
        ];
    }

    /** @return list<string> */
    public static function additionalCertifications(): array
    {
        return ['CPA', 'ACCA', 'CMA', 'CS', 'CFA', 'FRM', 'CIA'];
    }

    /** @return list<string> */
    public static function propertyTypes(): array
    {
        return ['Residential', 'Commercial', 'Industrial', 'Agricultural', 'Plots/Land'];
    }

    /** @return list<string> */
    public static function transactionTypes(): array
    {
        return ['Buy/Sell', 'Rent/Lease', 'Investment Advisory', 'Property Management'];
    }

    /** @return list<string> */
    public static function priceRangeExpertise(): array
    {
        return [
            'Below ₹50 Lakh',
            '₹50L - ₹1 Crore',
            '₹1-2 Crore',
            '₹2-5 Crore',
            'Above ₹5 Crore',
        ];
    }
}
