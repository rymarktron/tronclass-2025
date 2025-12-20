'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Camera, X } from 'lucide-react';

interface Photo {
  id: string;
  src: string;
  alt: string;
  year: string;
  term: string;
  description: string;
  category: string;
}

const PhotosPage = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  // Gallery photos with descriptions - you can update these after
  const photos: Photo[] = [
    {
      id: '1',
      src: '/gallery/IMG_8556.png',
      alt: 'First Year Event',
      year: '1',
      term: '1A',
      description: 'Early days in the program',
      category: 'social',
    },
    {
      id: '2',
      src: '/gallery/Firstclass_inperson_2ATrons_feb7_2022.jpg',
      alt: 'First Year In-Person',
      year: '1',
      term: '1B',
      description: 'First in-person class gathering',
      category: 'academic',
    },
    {
      id: '3',
      src: '/gallery/PXL_20211129_041215552.jpg',
      alt: 'Year 2 Memory',
      year: '2',
      term: '2A',
      description: 'Second year memories',
      category: 'social',
    },
    {
      id: '4',
      src: '/gallery/IMG_0968.jpg',
      alt: 'Year 2 Event',
      year: '2',
      term: '2B',
      description: 'Class bonding moment',
      category: 'social',
    },
    {
      id: '5',
      src: '/gallery/IMG_2070.jpg',
      alt: 'Year 3 Project',
      year: '3',
      term: '3A',
      description: 'Design project in action',
      category: 'projects',
    },
    {
      id: '6',
      src: '/gallery/IMG_0167.jpg',
      alt: 'Year 3 Celebration',
      year: '3',
      term: '3B',
      description: 'Year 3 milestone celebration',
      category: 'social',
    },
    {
      id: '7',
      src: '/gallery/DSC_0559[1].JPG',
      alt: 'Final Year',
      year: '4',
      term: '4B',
      description: 'In Ring Ceremony',
      category: 'academic',
    },
    {
      id: '8',
      src: '/gallery/D10F9CE1-5555-40D4-B89A-D7F8494F0B74.jpg',
      alt: 'Graduation',
      year: '4',
      term: '4B',
      description: 'Celebrating the end of the journey',
      category: 'social',
    },
    {
      id: '9',
      src: '/gallery/remix-9785d192-172e-4578-a0f8-db6fe858e50a.webp',
      alt: 'Class Memory',
      year: '2',
      term: '2A',
      description: 'Cherished class memory',
      category: 'social',
    },
  ];

  const categories = [
    { id: 'social', name: 'Social', color: 'bg-blue-100 border-blue-500 text-blue-900' },
    { id: 'academic', name: 'Academic', color: 'bg-purple-100 border-purple-500 text-purple-900' },
    { id: 'projects', name: 'Projects', color: 'bg-green-100 border-green-500 text-green-900' },
  ];

  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.color : '';
  };

  const years = [
    { year: 1, label: 'First Year', terms: ['1A', '1B'] },
    { year: 2, label: 'Second Year', terms: ['2A', '2B'] },
    { year: 3, label: 'Third Year', terms: ['3A', '3B'] },
    { year: 4, label: 'Fourth Year', terms: ['4A', '4B'] },
  ];

  const getPhotosForTerm = (year: string, term: string) => {
    return photos.filter(p => p.year === year && p.term === term);
  };

  return (
        <div className="min-h-screen bg-gradient-to-br from-amber-100 via-gray-200 to-yellow-100 p-4 md:p-8">
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-amber-500 to-yellow-600 text-white mx-auto mb-4">
            <Camera className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Undergrad Journey
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A photographic timeline through four years of Mechatronics Engineering
          </p>
        </div>

        {/* Timeline View */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Photo Timeline</h2>
          
          <div className="space-y-12">
            {years.map((yearGroup, yearIndex) => (
              <div key={yearGroup.year}>
                {/* Year Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-gray-900 to-gray-700 text-white font-bold text-lg">
                    {yearGroup.year}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{yearGroup.label}</h3>
                  {yearIndex < years.length - 1 && (
                    <div className="flex-1 h-0.5 bg-gray-300 ml-4"></div>
                  )}
                </div>

                {/* Terms in Year */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-16">
                  {yearGroup.terms.map(term => {
                    const termPhotos = getPhotosForTerm(String(yearGroup.year), term);

                    return (
                      <div key={term} className="border-l-4 border-gray-300 pl-6 pb-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-4 h-4 rounded-full bg-gray-400 -ml-8"></div>
                          <h4 className="text-lg font-bold text-gray-900">
                            {term === '1A' || term === '2A' || term === '3A' || term === '4A' ? 'Fall' : 'Winter'}
                          </h4>
                          <span className="text-sm text-gray-600">
                            ({termPhotos.length} {termPhotos.length === 1 ? 'photo' : 'photos'})
                          </span>
                        </div>

                        {/* Photos Grid */}
                        <div className="grid grid-cols-2 gap-3">
                          {termPhotos.length > 0 ? (
                            termPhotos.map(photo => (
                              <div
                                key={photo.id}
                                onClick={() => setSelectedPhoto(photo)}
                                className={`rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all border-2 cursor-pointer ${
                                  getCategoryColor(photo.category)
                                }`}
                              >
                                <div className="relative aspect-square">
                                  <Image
                                    src={photo.src}
                                    alt={photo.alt}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                  />
                                </div>
                                <div className="p-2 bg-white">
                                  <p className="text-xs font-semibold text-gray-900 line-clamp-2">
                                    {photo.description}
                                  </p>
                                </div>
                              </div>
                            ))
                          ) : (
                            <div className="col-span-2 p-4 text-gray-500 italic text-center">
                              No photos in selected category
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Photo Lightbox Modal */}
    {selectedPhoto && (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={() => setSelectedPhoto(null)}
      >
        {/* Blurred Background */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          aria-hidden="true"
        ></div>

        {/* Modal Content */}
        <div
          className="relative z-50 w-full max-w-4xl"
          onClick={e => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Image Container */}
          <div className="relative w-full bg-black rounded-lg overflow-hidden">
            <div className="relative aspect-video">
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                fill
                className="object-contain"
                sizes="(max-width: 1536px) 100vw, 1536px"
              />
            </div>

            {/* Description at Bottom */}
            <div className="bg-gradient-to-t from-black/90 to-transparent p-6 absolute bottom-0 left-0 right-0">
              <p className="text-white text-lg font-semibold">
                {selectedPhoto.description}
              </p>
              <p className="text-gray-300 text-sm mt-2">
                Year {selectedPhoto.year} • {selectedPhoto.term}
              </p>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
  );
};

export default PhotosPage;