# Exam Interface

## Desktop Layout

Header:

```text
[Application Name]  [Question 12 / 40]  [Timer 42:31]
```

Body:

### Main Area

- question;
- option A;
- option B;
- option C;
- option D;
- option E.

Bottom navigation:

- Previous
- Mark for Review
- Next

### Question Map

Contoh:

```text
01 ✓
02 ✓
03 ?
04 ★
05 ?
06 ✓
```

Legend:

- ✓ Answered
- ? Not Answered
- ★ Review

## Mobile Layout

Question Map berubah menjadi drawer/modal.

Timer tetap terlihat.

Navigation dibuat sticky/fixed secara aman agar tidak menutupi konten.

## Submit Confirmation

Saat user menekan submit, tampilkan modal:

```text
Submit Simulation?

You have:
- 3 unanswered
- 2 marked for review

Are you sure?

[Continue Exam]
[Submit Now]
```

Jika waktu habis, submit langsung tanpa konfirmasi.

## Question Option UX

- seluruh option mudah ditekan;
- keyboard navigation tersedia;
- state selected jelas;
- jangan gunakan warna sebagai satu-satunya penanda;
- label option harus terbaca screen reader.
