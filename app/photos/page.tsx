'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import PageContainer from '@/components/PageContainer';
import { Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';

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
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number>(-1);

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
      year: '2',
      term: '2A',
      description: 'First in-person class for MTE262 Course',
      category: 'academic',
    },
    {
      id: '3',
      src: '/gallery/PXL_20211129_041215552.jpg',
      alt: 'Year 2 Memory',
      year: '2',
      term: '2B',
      description: 'Tron snowball fight',
      category: 'social',
    },
    {
      id: '4',
      src: '/gallery/IMG_0968.jpg',
      alt: 'Year 2 Event',
      year: '2',
      term: '2B',
      description: 'Prof Charbel Azzi class',
      category: 'social',
    },
    {
      id: '5',
      src: '/gallery/Tron-MTE219-GroupPhoto.jpg',
      alt: 'Year 2 Event',
      year: '2',
      term: '2A',
      description: 'Bridge project demo day',
      category: 'social',
    },
    {
      id: '6',
      src: '/gallery/IMG_2070.jpg',
      alt: 'Year 4 Project',
      year: '4',
      term: '4B',
      description: 'Orientation week with Tron leaders',
      category: 'projects',
    },
    {
      id: '7',
      src: '/gallery/IMG_0167.jpg',
      alt: 'Year 3 Celebration',
      year: '3',
      term: '3B',
      description: 'Summer Tron Fire',
      category: 'social',
    },
    {
      id: '8',
      src: '/gallery/DSC_0559[1].JPG',
      alt: 'Final Year',
      year: '4',
      term: '4B',
      description: 'Iron Ring Ceremony',
      category: 'academic',
    },
    {
      id: '9',
      src: '/gallery/D10F9CE1-5555-40D4-B89A-D7F8494F0B74.jpg',
      alt: 'Graduation',
      year: '3',
      term: '3B',
      description: 'Line following robot, pre-capstone project',
      category: 'social',
    },
    {
      id: '10',
      src: '/gallery/remix-9785d192-172e-4578-a0f8-db6fe858e50a.webp',
      alt: 'Class Memory',
      year: '2',
      term: '2A',
      description: 'Cherished class memory',
      category: 'social',
    },
    {
      id: '11',
      src: '/gallery/IMG_4493.JPG',
      alt: 'Class Memory',
      year: '4',
      term: '4A',
      description: 'Making the ball be stable for controls lab using IOP',
      category: 'social',
    },
    {
      id: '12',
      src: '/gallery/tron-banner.jpg',
      alt: 'Tron Banner',
      year: '4',
      term: '4B',
      description: 'Prank - the largest banner from all the faculties',
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

  const openPhoto = (photo: Photo, index: number) => {
    setSelectedPhoto(photo);
    setSelectedPhotoIndex(index);
  };

  const goToPrevious = () => {
    if (selectedPhotoIndex > 0) {
      const newIndex = selectedPhotoIndex - 1;
      setSelectedPhoto(photos[newIndex]);
      setSelectedPhotoIndex(newIndex);
    }
  };

  const goToNext = () => {
    if (selectedPhotoIndex < photos.length - 1) {
      const newIndex = selectedPhotoIndex + 1;
      setSelectedPhoto(photos[newIndex]);
      setSelectedPhotoIndex(newIndex);
    }
  };

  const getPhotosForYear = (year: string) => {
    return photos.filter(p => p.year === year);
  };

  return (
    <>
      <PageContainer>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
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

                {/* Year Photos */}
                <div className="ml-16 pb-6">
                  {(() => {
                    const yearPhotos = getPhotosForYear(String(yearGroup.year));
                    return (
                      <>
                        {/* Photos Grid */}
                        <div className="grid grid-cols-2 gap-3">
                          {yearPhotos.length > 0 ? (
                            yearPhotos.map((photo, idx) => (
                              <div
                                key={photo.id}
                                onClick={() => openPhoto(photo, photos.indexOf(photo))}
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
                              No photos for this year
                            </div>
                          )}
                        </div>
                      </>
                    );
                  })()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageContainer>

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
          className="relative z-50 w-full max-w-6xl"
          onClick={e => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors z-50"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Image Container */}
          <div className="relative w-full bg-black rounded-lg overflow-hidden">
            <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                fill
                className="object-contain"
                sizes="(max-width: 1536px) 100vw, 1536px"
                priority
              />
            </div>

            {/* Left Arrow */}
            <button
              onClick={goToPrevious}
              disabled={selectedPhotoIndex === 0}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 disabled:opacity-30 disabled:cursor-not-allowed transition-all z-40"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-12 h-12" />
            </button>

            {/* Right Arrow */}
            <button
              onClick={goToNext}
              disabled={selectedPhotoIndex === photos.length - 1}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 disabled:opacity-30 disabled:cursor-not-allowed transition-all z-40"
              aria-label="Next photo"
            >
              <ChevronRight className="w-12 h-12" />
            </button>

            {/* Photo Counter */}
            <div className="absolute top-4 right-4 bg-black/60 px-4 py-2 rounded-lg text-white text-sm font-semibold z-40">
              {selectedPhotoIndex + 1} / {photos.length}
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
    </>
  );
};

export default PhotosPage;